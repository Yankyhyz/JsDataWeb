$(function () {
    var cpuData = [];
    for (var i = 0; i < 1000; i++) {
        cpuData.push({
            displayTime: new Date().toLocaleTimeString(),
            usedMem: NaN,
            cpuUsage: NaN
        });
    }
    var insertionPoint = 0;

    function toDisplayCPU(v) {
        return v.toFixed(2);
    }

    function toDisplayMem(v) {
        if (v >= (1024 * 1024 * 1024)) {
            v /= (1024 * 1024 * 1024);
            return v.toFixed(2) + "GB";
        }

        if (v >= (1024 * 1024)) {
            v /= (1024 * 1024);
            return v.toFixed(2) + "MB";
        }

        if (v >= (1024)) {
            v /= (1024);
            return v.toFixed(2) + "KB";
        }

        return v;
    }

    function renderChart() {
        var chartOptions = {
            dataSource: cpuData,
            width: "700px",
            height: "500px",
            title: "System Performance",
            subtitle: "CPU utilization over time until present",
            horizontalZoomable: true,
            verticalZoomable: true,
            rightMargin: 30,
            legend: { element: "legend" },
            axes: [{
                type: "categoryX",
                name: "xAxis",
                label: "displayTime",
                labelAngle: 45
            }, {
                type: "numericY",
                name: "yAxis",
                title: "CPU Utilization",
                minimumValue: 0,
                maximumValue: 100,
                formatLabel: toDisplayCPU
            }, {
                type: "numericY",
                name: "yAxisMemory",
                title: "Memory Utilization",
                labelLocation: "outsideRight",
                minimumValue: 0,
                maximumValue: 8 * 1024 * 1024 * 1024,
                interval: 1024 * 1024 * 1024,
                formatLabel: toDisplayMem,
                majorStroke: "transparent"
            }],
            series: [{
                name: "cpu",
                type: "line",
                xAxis: "xAxis",
                yAxis: "yAxis",
                valueMemberPath: "cpuUsage",
                showTooltip: true,
                tooltipTemplate:
            "<div><em>CPU:</em>&nbsp<span>${item.displayCPU}</span></div>",
                title: "CPU Utilization"
            }, {
                name: "mem",
                type: "line",
                xAxis: "xAxis",
                yAxis: "yAxisMemory",
                valueMemberPath: "usedMem",
                showTooltip: true,
                tooltipTemplate:
            "<div><em>Memory:</em>&nbsp<span>${item.displayMem}</span></div>",
                title: "Memory Utilization"
            }, {
                name: "itemToolTips",
                type: "itemToolTipLayer",
                useInterpolation: false,
                transitionDuration: 300
            }]
        };

        $("#chart").igDataChart(chartOptions);

    }

    renderChart();

    var socket = io.connect("http://localhost:8080");

    socket.on("cpuUpdate", function (update) {
        var currTime = new Date();
        var displayString = currTime.toLocaleTimeString();
        update.displayCPU = toDisplayCPU(update.cpuUsage);
        update.displayMem = toDisplayMem(update.usedMem);
        update.displayTime = displayString;
        cpuData[insertionPoint] = update;

        $("#chart").igDataChart("notifySetItem",
            cpuData, insertionPoint, update);

        for (var i = insertionPoint + 1;
            i < Math.min(insertionPoint + 21, 1000);
            i++) {
            cpuData[i] = {
                displayTime: new Date().toLocaleTimeString(),
                usedMem: NaN,
                cpuUsage: NaN
            };
            $("#chart").igDataChart("notifySetItem",
            cpuData, i, cpuData[i]);
        }

        insertionPoint++;
        if (insertionPoint > 999) {
            insertionPoint = 0;
        }
    });
});
