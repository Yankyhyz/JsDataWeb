var data = [
    { "name": "Shoes", "Q1": 40, "Q2": 25 },
    { "name": "Hats", "Q1": 50, "Q2": 40 },
    { "name": "Coats", "Q1": 35, "Q2": 45 },
    { "name": "Scarves", "Q1": 20, "Q2": 15 }
];

var palette = [
    "rgba(143, 39, 26, 1)",
    "rgba(13, 113, 125, 1)",
    "rgba(72, 176, 19, 1)"
];

var KeyFrame = function () {
    this.xPositions = [];
    this.yPositions = [];
};
KeyFrame.prototype.clear = function () {
    this.xPositions.length = 0;
    this.yPositions.length = 0;
};

var ColumnsKeyFrame = function () {
    KeyFrame.call(this);
    this.widths = [];
    this.heights = [];
};
ColumnsKeyFrame.prototype = Object.create(KeyFrame.prototype);
ColumnsKeyFrame.prototype.addColumn = function (
    x, y,
    width, height) {

    this.xPositions.push(x);
    this.yPositions.push(y);
    this.widths.push(width);
    this.heights.push(height);

    return this;
};
ColumnsKeyFrame.prototype.clear = function () {
    KeyFrame.prototype.clear.call(this);
    this.widths.length = 0;
    this.heights.length = 0;
};

var AxisKeyFrame = function () {
    KeyFrame.call(this);
    this.labelTexts = [];
};
AxisKeyFrame.prototype = Object.create(KeyFrame.prototype);
AxisKeyFrame.prototype.addLabel = function (
    x, y,
    text) {

    this.xPositions.push(x);
    this.yPositions.push(y);
    this.labelTexts.push(text);

    return this;
};
AxisKeyFrame.prototype.clear = function () {
    KeyFrame.prototype.clear.call(this);
    this.labelTexts.length = 0;
};

if (!window.queueFrame) {
    if (window.requestAnimationFrame) {
        window.queueFrame = window.requestAnimationFrame;
    } else if (window.webkitRequestAnimationFrame) {
        window.queueFrame = window.webkitRequestAnimationFrame;
    } else if (window.mozRequestAnimationFrame) {
        window.queueFrame = window.mozRequestAnimationFrame;
    } else {
        window.queueFrame = function (callback) {
            window.setTimeout(1000.0 / 60.0, callback);
        };
    }
}

var ChartElement = function (chart) {
    this._chart = chart;
    this._color = "rgba(80, 80, 80, 1)";
};
ChartElement.prototype._validate = function () {
    if (this._chart._data === null ||
        isNaN(this._chart._minValue) ||
        isNaN(this._chart._maxValue)) {
        return false;
    }
    return true;
};
ChartElement.prototype._update = function () {
    if (!this._validate()) {
        return;
    }
    if (this._chart._data === null) {
        return;
    }
    this._updateFrames();
    this._chart.dirty();
};
ChartElement.prototype._updateFrames = function () {
    this._updateFrame(this._displayFrame);
};
ChartElement.prototype.color = function (col) {
    this._color = col;
    this._update();
    return this;
};
ChartElement.prototype.chart = function () {
    return this._chart;
};

var CategoryAxis = function (chart) {
    ChartElement.call(this, chart);
    this._displayFrame = new AxisKeyFrame();
    this._labelAccessor = null;
};
CategoryAxis.prototype = Object.create(ChartElement.prototype);
CategoryAxis.prototype._validate = function () {
    if (this._labelAccessor === null) {
        return false;
    }
    return ChartElement.prototype._validate.call(this);
};
CategoryAxis.prototype._render = function (ctx) {
    var f = this._displayFrame;
    var currText,
        currX, currY;
	ctx.fillStyle = this._color;
    for (var i = 0; i < f.xPositions.length; i++) {
        currX = f.xPositions[i];
        currY = f.yPositions[i];
        currText = f.labelTexts[i];
        
        var width = ctx.measureText(currText).width;

        ctx.fillText(
            currText,
            currX - width / 2.0,
            currY);
    }
};
CategoryAxis.prototype.labelAccessor = function (accessor) {
    this._labelAccessor = accessor;
    this._update();
    return this;
};
CategoryAxis.prototype._updateFrame = function (frame) {
    var data = this._chart._data;

    var scaledX, nextScaled, label, pos;

    frame.clear();

    for (var i = 0; i < data.length; i++) {
        label = this._labelAccessor(data[i]);

        scaledX = this._chart.scaleX(i);
        nextScaled = this._chart.scaleX(i + 1);

        pos = (scaledX + nextScaled) / 2.0;

        frame.addLabel(
            pos,
            this._chart._totalHeight - 20,
            label);
    }
};

var NumericAxis = function (chart) {
    ChartElement.call(this, chart);
    this._displayFrame = new AxisKeyFrame();
};
NumericAxis.prototype = Object.create(ChartElement.prototype);
NumericAxis.prototype._render = function (ctx) {
    var f = this._displayFrame;
    var currText,
        currX, currY;
    ctx.fillStyle = this._color;
    for (var i = 0; i < f.xPositions.length; i++) {
        currX = f.xPositions[i];
        currY = f.yPositions[i];
        currText = f.labelTexts[i];
        
        ctx.textBaseline = "middle";
        ctx.fillText(
            currText,
            currX,
            currY);
    }
};
NumericAxis.prototype._updateFrame = function (frame) {
    var min = this._chart._minValue;
    var max = this._chart._maxValue;
    var interval = (max - min) / 6.0;
    var label, scaledY;

    frame.clear();
    for (var i = min; i <= max; i += interval) {
        label = i.toString();

        scaledY = this._chart.scaleY(i);

        frame.addLabel(
            15,
            scaledY,
            label);
    }
};

var ColumnSeries = function (chart) {
    ChartElement.call(this, chart);
    this._displayFrame = new ColumnsKeyFrame();
    this._valueAccessor = null;
    this._color = "rgba(255, 0, 0, 1)";
};
ColumnSeries.prototype = Object.create(ChartElement.prototype);
ColumnSeries.prototype._validate = function () {
    if (this._valueAccessor === null) {
        return false;
    }
    return ChartElement.prototype._validate.call(this);
};
ColumnSeries.prototype._render = function (ctx) {
    var f = this._displayFrame;
    var currWidth, currHeight,
        currX, currY;
    ctx.fillStyle = this._color;
    for (var i = 0; i < f.widths.length; i++) {
        currX = f.xPositions[i];
        currY = f.yPositions[i];
        currWidth = f.widths[i];
        currHeight = f.heights[i];
        
        ctx.fillRect(
            currX, currY,
            currWidth, currHeight);
    }
};
ColumnSeries.prototype.valueAccessor = function (accessor) {
    this._valueAccessor = accessor;
    this._update();
    return this;
};
ColumnSeries.prototype._updateFrame = function (frame) {
    var data = this._chart._data;
    var index = this._index;

    var width = this._chart.seriesWidth();
    var halfWidth = width / 2.0;
    var offset = this._chart.offset(index);
    var zeroPosition = this._chart.scaleY(0);
    var val, scaledX, scaledY;

    frame.clear();

    for (var i = 0; i < data.length; i++) {
        val = this._valueAccessor(data[i]);

        scaledY = this._chart.scaleY(val);
        scaledX = this._chart.scaleX(i);

        frame.addColumn(
            scaledX + offset - halfWidth,
            Math.min(scaledY, zeroPosition),
            width,
            Math.abs(scaledY - zeroPosition));
    }
};

var Chart = function (targetId) {
    this._canvas = document.getElementById(targetId);
    this._ctx = this._canvas.getContext("2d");
    this._ctx.font = "14pt Verdana";

    this._data = null;

    this._totalWidth = this._canvas.width;
    this._totalHeight = this._canvas.height;
    this._leftMargin = 50;
    this._rightMargin = 50;
    this._topMargin = 50;
    this._bottomMargin = 50;

    this._minValue = NaN;
    this._maxValue = NaN;

    this._series = [];

    this._xAxis = new CategoryAxis(this);
    this._yAxis = new NumericAxis(this);

    this._gap = 0.25;
    this._isDirty = false;

    this._calculatePlotArea();
};
Chart.prototype.xAxis = function () {
    return this._xAxis;
};
Chart.prototype.yAxis = function () {
    return this._yAxis;
};
Chart.prototype.column = function () {
    var c = new ColumnSeries(this);
    this._series.push(c);
    c._index = this._series.length - 1;
    this.update();
    return c;
};
Chart.prototype.minValue = function (val) {
    this._minValue = val;
    this.update();
    return this;
};
Chart.prototype.maxValue = function (val) {
    this._maxValue = val;
    this.update();
    return this;
};
Chart.prototype._calculatePlotArea = function () {
    var left = this._leftMargin;
    var top = this._topMargin;
    var width = this._totalWidth - (this._leftMargin + this._rightMargin);
    var height = this._totalHeight - (this._topMargin + this._bottomMargin);

    this._plotLeft = left;
    this._plotTop = top;
    this._plotWidth = width;
    this._plotHeight = height;
};
Chart.prototype.dirty = function () {
    if (this._isDirty) {
        return;
    }
    this._isDirty = true;
    var self = this;
    window.queueFrame(function () {
        self._render();
    });
};
Chart.prototype._render = function () {
    var ctx = this._ctx;
    ctx.clearRect(0, 0, this._totalWidth, this._totalHeight);
    ctx.fillStyle = "rgba(240,240,240,1)";
    ctx.fillRect(0, 0, this._totalWidth, this._totalHeight);
    
    ctx.fillStyle = "rgba(50,50,50,1)";
    ctx.fillRect(this._plotLeft, this._plotTop + this._plotHeight, this._plotWidth, this._bottomMargin);
    
    ctx.fillRect(0, this._plotTop - 8, this._leftMargin, this._plotHeight + 16);

    this._xAxis._render(ctx);
    this._yAxis._render(ctx);
    for (var i = 0; i < this._series.length; i++) {
        this._series[i]._render(ctx);
    }
};
Chart.prototype.update = function () {
    this._xAxis._update();
    this._yAxis._update();
    for (var i = 0; i < this._series.length; i++) {
        this._series[i]._update();
    }
    return this;
};
Chart.prototype.data = function (data) {
    this._data = data;
    this.update();
    return this;
};
Chart.prototype.scaleY = function (val) {
    var p = (val - this._minValue) / (this._maxValue - this._minValue);
    p = 1.0 - p;
    return this._plotTop + p * this._plotHeight;
};
Chart.prototype.offset = function (seriesIndex) {
    var fullWidth = this._plotWidth / this._data.length;
    var start = this._gap / 2.0 * fullWidth;
    var span = seriesIndex * this.seriesWidth();
    span += this.seriesWidth() / 2.0;
    var offset = start + span;
    return offset;
};
Chart.prototype.scaleX = function (val) {
    var p = val / this._data.length;
    return this._plotLeft + p * this._plotWidth;
};
Chart.prototype.seriesWidth = function () {
    var fullWidth = this._plotWidth / this._data.length;
    var actualWidth = fullWidth * (1.0 - this._gap);
    actualWidth /= this._series.length;
    return actualWidth;
};

var chart = new Chart("chart")
    .minValue(0)
    .maxValue(60)
    .data(data);

chart.xAxis()
    .color("white")
    .labelAccessor(function (item) {
        return item.name;
    });
    
chart.yAxis()
    .color("white")

chart.column()
    .color(palette[0])
    .valueAccessor(function (item) {
        return item.Q1;
    });

chart.column()
    .color(palette[1])
    .valueAccessor(function (item) {
        return item.Q2;
    });
