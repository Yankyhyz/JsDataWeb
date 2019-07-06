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
            height: "300px",
            title: "AAPL Historical Prices",
            subtitle: "Data: Quandl Open Data",
            horizontalZoomable: true,
			verticalZoomable: true,
            syncChannel: "channel1",
			synchronizeVertically: false,
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
                labelExtent: 60
            }],
            series: [{
                name: "aaplPriceChannel",
                type: "priceChannelOverlay",
                xAxis: "xAxis",
                yAxis: "yAxis",
                openMemberPath: "Open",
                highMemberPath: "High",
                lowMemberPath: "Low",
                closeMemberPath: "Close",
                volumeMemberPath: "Volume",
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                transitionInDuration: 1000,
                title: "AAPL Price Channels"
            }, {
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
                title: "AAPL Price",
                resolution: 8
            }, {
                name: "itemToolTips",
                type: "itemToolTipLayer",
                useInterpolation: false,
                transitionDuration: 300
            }]
        });

        $("#volumeChart").igDataChart({
            dataSource: transformed,
            width: "700px",
            height: "150px",
            horizontalZoomable: true,
			verticalZoomable: false,
            syncChannel: "channel1",
			synchronizeVertically: false,
            rightMargin: 30,
            legend: { element: "legend" },
            axes: [{
                type: "categoryX",
                name: "xAxis",
                label: "Date",
                labelExtent: 55,
                labelVisibility: "collapsed"
            }, {
                type: "numericY",
                name: "yAxis",
                title: "Volume",
                labelExtent: 60,
                formatLabel: function (v) {
                    if (v > 1000000) {
                        v /= 1000000;
                        return v + "M";
                    }
                    if (v > 1000) {
                        v /= 1000;
                        return v + "K";
                    }

                    return v.toString();
                }
            }],
            series: [{
                name: "aaplVolume",
                type: "area",
                xAxis: "xAxis",
                yAxis: "yAxis",
                brush: "#7C932F",
                outline: "#556420",
                valueMemberPath: "Volume",
                showTooltip: true,
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
                transitionInDuration: 1000,
                title: "AAPL Volume",
            }, {
                name: "itemToolTips",
                type: "itemToolTipLayer",
                useInterpolation: false,
                transitionDuration: 300
            }]
        });

        $("#zoom").igZoombar({
            width: "640px",
            target: "#chart",
            zoomWindowMinWidth: 1.2
        });
        $("#zoom").css("margin-left", "44px");
        $("#zoom_zoombar_clone").igDataChart({
            subtitle: null,
            rightMargin: 0,
            axes: [{ name: "xAxis", interval: 0 }],
            series: [{
                name: "aapl", remove: true
            }, {
                name: "aaplPriceChannel", remove: true
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
