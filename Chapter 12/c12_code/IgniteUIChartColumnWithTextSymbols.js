$(function () {
    var data = [
        { "product": "Shoes", "amount": 40 },
        { "product": "Hats", "amount": 50 },
        { "product": "Coats", "amount": 35 },
        { "product": "Scarves", "amount": 20 }
    ];
    var data2 = [
        { "product": "Shoes", "amount": 25 },
        { "product": "Hats", "amount": 40 },
        { "product": "Coats", "amount": 45 },
        { "product": "Scarves", "amount": 15 }
    ];
    
    var markerFont = "18px Verdana";
    var measureSpan = $("<span>M</span>");
    measureSpan.css("font", markerFont);
    measureSpan.css("visibility", "hidden");
    $("body").append(measureSpan);
    var approxFontHeight = parseFloat(measureSpan.prop("offsetHeight"));
    measureSpan.remove();
    var markerTextMargin = 2.5;

    var textualMarker = {
        measure: function (measureInfo) {
            var cont = measureInfo.context;
            cont.font = markerFont;
            var data = measureInfo.data;
            var name = "null";
            if (data.item() !== null) {
                name = data.item().amount.toString();
            }
            var height = approxFontHeight + markerTextMargin * 2.0;
            var width = cont.measureText(name).width + markerTextMargin * 2.0;
            measureInfo.width = width;
            measureInfo.height = height;
        },
        render: function (renderInfo) {
            var ctx = renderInfo.context;
            ctx.font = markerFont;
            if (renderInfo.isHitTestRender) {
                ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
            } else {
                ctx.fillStyle = "black";
            }

            var data = renderInfo.data;
            if (data.item() === null) {
                return;
            }
            var name = data.item().amount.toString();
            var halfWidth = renderInfo.availableWidth / 2.0;
            var halfHeight = renderInfo.availableHeight / 2.0;
            var x = renderInfo.xPosition - halfWidth;

            var y = renderInfo.yPosition - (halfHeight * 2.0);
            if (y < 0) {
                y += (halfHeight * 4.0);
            }

            if (renderInfo.isHitTestRender) {
                ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
            } else {
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
                ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
                ctx.fillStyle = renderInfo.data.outline().fill();
                ctx.strokeRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
                ctx.globalAlpha = 1;

                ctx.fillStyle = "black";
                ctx.textBaseline = "top";
                ctx.fillText(name, x + markerTextMargin, y + markerTextMargin);
            }
        }
    };
    
    $("#chart").igDataChart({
        dataSource: data,
        title: "Product Sales",
        subtitle: "Sales in various product categories over time",
        rightMargin: 30,
        legend: { element: "legend" },
        axes: [{
            type: "categoryX",
            name: "xAxis",
            label: "product",
            labelExtent: 40
        }, {
            type: "numericY",
            name: "yAxis",
            title: "Sales",
            minimumValue: 0,
            strip: "rgba(230,230,230,.4)",
            maximumValue: 60,
            labelExtent: 40
        }],
        series: [{
            name: "productSales",
            type: "column",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "amount",
            markerType: "automatic",
            isTransitionInEnabled: true,
            isHighlightingEnabled: true,
            transitionInDuration: 1000,
            showTooltip: true,
            markerTemplate: textualMarker,
            title: "Q1"
        }, {
            name: "productSales2",
            dataSource: data2,
            type: "column",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "amount",
            markerType: "automatic",
            isTransitionInEnabled: true,
            isHighlightingEnabled: true,
            transitionInDuration: 1000,
            showTooltip: true,
            markerTemplate: textualMarker,
            title: "Q2"
        }]
    });
});
