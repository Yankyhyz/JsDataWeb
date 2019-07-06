function renderChart() {
    var data = new google.visualization.DataTable(
    {
        cols: [{
                id: 'x', 
                label: 'x', 
                type: 'number'
            }, {
                id: 'y', 
                label: 'sin(x) +/- error', 
                type: 'number'
            }]       
    });

    
    var x, y;
    for (var i = 0; i < 1000; i++) {
        x = Math.random() * 6 * Math.PI;
        y = Math.sin(x);
        y += -0.2 + Math.random() * 0.4;
        
        data.addRow([x, y]);
    }
        
    var options = {
        title : "Noisy Sine Curve",
        hAxis: { title: "x" },
        vAxis: { title: "y" }
    };
    
    var chart = new google.visualization.ScatterChart(document.getElementById("chart"));
    chart.draw(data, options);
}
google.setOnLoadCallback(renderChart);
