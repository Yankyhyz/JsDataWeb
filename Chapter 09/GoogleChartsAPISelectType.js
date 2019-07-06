function renderChart() {
    var data = google.visualization.arrayToDataTable([
          ['product', 'Sales Q1', 'Sales Q2', 'Sales Q3'],
          ['Shoes',  40, 25, 35],
          ['Hats',  50, 40, 30],
          ['Coats',  35, 45, 40],
          ['Scarves',  20, 15, 25]
        ]);
        
    var verticalOptions = {
        title : "Product Sales",
        hAxis: { title: "Sales" },
        vAxis: { title: "Products" }
    };
    
    var horizontalOptions = {
        title : "Product Sales",
        hAxis: { title: "Products" },
        vAxis: { title: "Sales" }
    };
    
    var chart = new google.visualization.ChartWrapper({ containerId: "chart" });
    chart.setDataTable(data);
    chart.setOptions(verticalOptions);
    chart.setChartType('BarChart');
    chart.draw();
    
    var selector = document.getElementById("chartSelect");
    selector.onchange = function () {
        if (selector.Value == "BarChart") {
            chart.setOptions(verticalOptions);
        } else {
            chart.setOptions(horizontalOptions);
        }
        chart.setChartType(selector.value);
        chart.draw();
    };
}
google.setOnLoadCallback(renderChart);