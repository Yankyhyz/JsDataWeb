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
            type: "area",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "amount",
            showTooltip: true,
            isTransitionInEnabled: true,
            isHighlightingEnabled: true,
            transitionInDuration: 1000,
            title: "Q1"
        }, {
            name: "productSales2",
            dataSource: data2,
            type: "area",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "amount",
            showTooltip: true,
            isTransitionInEnabled: true,
            isHighlightingEnabled: true,
            transitionInDuration: 1000,
            title: "Q2"
        }, {
            name: "itemToolTips",
            type: "itemToolTipLayer",
            transitionDuration: 300
        }]
    });
});
