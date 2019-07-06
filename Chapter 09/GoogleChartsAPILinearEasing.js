function renderChart() {
    function linear(t) {
        return t;
    }
 
    var dataArray = [['time', 'progress']];
    for (var i = 0; i < 500; i++) {
        var f = linear;
        var val =  i / 500;
        dataArray.push([ val, f(val)]);
    }

    var data = google.visualization.arrayToDataTable(dataArray);
        
    var options = {
        title : "Linear Easing",
        hAxis: { title: "Time" },
        vAxis: { title: "Progress" },
        lineWidth: 1, 
        pointSize: 0
    };
    
    var chart = new google.visualization.ScatterChart(document.getElementById("chart"));
    chart.draw(data, options);
}
google.setOnLoadCallback(renderChart);