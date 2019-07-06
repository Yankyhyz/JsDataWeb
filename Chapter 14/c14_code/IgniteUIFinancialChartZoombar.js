$(function () {
    $.ajax({
        type: "GET",
        url: "AAPL.json",
        dataType: "json",
        success: renderChart,
        error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown + 
                ". Loading from a file:// uri won't work in some browsers");
        }
    });
    
    function renderChart(data) {
        var columnNames = data.column_names;
        var transformed = data.data.map(function (item) {
            var newItem = {};
            for (var i = 0; i < columnNames.length; i++) {
                newItem[columnNames[i]] = item[i];
            }
            return newItem;
        });

        $("#chart").igDataChart({
            dataSource: transformed,
            width: "700px",
            height: "500px",
            title: "AAPL Historical Prices",
            subtitle: "Data: Quandl Open Data",
            horizontalZoomable: true,
            verticalZoomable: true,
            rightMargin: 30,
            legend: { element: "legend" },
            axes: [{
                type: "categoryX",
                name: "xAxis",
                label: "Date",
                labelExtent: 60
            }, {
                type: "numericY",
                name: "yAxis",
                title: "Price",
                labelExtent: 40
            }],
            series: [{
                name: "aapl",
                type: "financial",
                xAxis: "xAxis",
                yAxis: "yAxis",
                openMemberPath: "Open",
                highMemberPath: "High",
                lowMemberPath: "Low",
                closeMemberPath: "Close",
                showTooltip: true,
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                transitionInDuration: 1000,
                title: "AAPL",
                resolution: 8
            }, {
                name: "itemToolTips",
                type: "itemToolTipLayer",
                useInterpolation: false,
                transitionDuration: 300
            }]
        });

        $("#zoom").igZoombar({
            width: "660px",
            target: "#chart",
            zoomWindowMinWidth: 1.2
        });
        $("#zoom").css("margin-left", "24px");
        $("#zoom").igZoombar("clone").igDataChart({
            subtitle: null,
            rightMargin: 0,
            axes: [{ name: "xAxis", interval: NaN }],
            series: [{
                name: "aapl", remove: true
            }, {
                name: "close",
                type: "area",
                xAxis: "xAxis",
                yAxis: "yAxis",
                valueMemberPath: "Close"
            }]
        });

    }
});
