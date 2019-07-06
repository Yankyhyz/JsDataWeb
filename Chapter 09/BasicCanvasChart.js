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
    this._chart.update();
}
ChartElement.prototype.color = function (col) {
    this._color = col;
    this._update();
    return this;
};
ChartElement.prototype.chart = function () {
    return this._chart;
};

var ColumnSeries = function (chart) {
    ChartElement.call(this, chart);
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
    if (!this._validate()) {
        return;
    }

    var currWidth, currHeight,
        currX, currY,
        currColor, i;
    
    var data = this._chart._data;
    var f = {};
    f.xPositions = [];
    f.yPositions = [];
    f.widths = [];
    f.heights = [];
    currColor = this._color;
    
    var index = this._index;
    var width = this._chart.seriesWidth();
    var halfWidth = width / 2.0;
    var offset = this._chart.offset(index);
    var zeroPosition = this._chart.scaleY(0);
    var val, scaledX, scaledY;
    
    for (i = 0; i < data.length; i++) {
        val = this._valueAccessor(data[i]);
        scaledY = this._chart.scaleY(val);
        scaledX = this._chart.scaleX(i);

        f.xPositions.push(scaledX + offset - halfWidth);
        f.yPositions.push(Math.min(scaledY, zeroPosition));
        f.widths.push(width);
        f.heights.push(Math.abs(scaledY - zeroPosition));
    }
        
    for (var i = 0; i < f.widths.length; i++) {
        currX = f.xPositions[i];
        currY = f.yPositions[i];
        currWidth = f.widths[i];
        currHeight = f.heights[i];
        
        ctx.fillStyle = currColor;
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
    
    this._gap = 0.25;
    
    this._calculatePlotArea();
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
Chart.prototype._render = function () {
    var ctx = this._ctx;
    ctx.clearRect(0, 0, this._totalWidth, this._totalHeight);
    ctx.fillStyle = "rgba(240,240,240,1)";
    ctx.fillRect(0, 0, this._totalWidth, this._totalHeight);

    for (var i = 0; i < this._series.length; i++) {
        this._series[i]._render(ctx);
    }
};
Chart.prototype.update = function () {
    this._render();
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
