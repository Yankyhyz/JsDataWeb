function renderChart() {
    var data = google.visualization.arrayToDataTable([
          ['product', 'Sales', { role: 'annotation' } ],
          ['Shoes',  0, "40"],
          ['Hats',  0, "50"],
          ['Coats',  0, "35"],
          ['Scarves',  0, "20"]
        ]);
        
    var options = {
        title : "Product Sales",
        hAxis: { title: "Sales", viewWindow: { min: 0, max: 55 } },
        vAxis: { title: "Products" },
        animation: {
            duration: 1000,
            easing: 'inAndOut',
        }
    };
    var button = document.getElementById('changeData');
    
    var initialAnimationPlayed = false;
    var chart = new google.visualization.BarChart(document.getElementById("chart"));
    google.visualization.events.addListener(chart, 'ready',
    function() {
        if (!initialAnimationPlayed) {
            initialAnimationPlayed = true;
            data.setValue(0, 1, 40);
            data.setValue(1, 1, 50);
            data.setValue(2, 1, 35);
            data.setValue(3, 1, 20);
            chart.draw(data, options);
        } else {
            button.disabled = false;
        }
    });

    chart.draw(data, options);
    
    var firstData = true;
    button.onclick = function () {
        if (!firstData) {
            firstData = !firstData;
            data.setValue(0, 1, 40);
            data.setValue(1, 1, 50);
            data.setValue(2, 1, 35);
            data.setValue(3, 1, 20);

            data.setValue(0, 2, "40");
            data.setValue(1, 2, "50");
            data.setValue(2, 2, "35");
            data.setValue(3, 2, "20");
        } else {
            firstData = !firstData;
            data.setValue(0, 1, 25);
            data.setValue(1, 1, 40);
            data.setValue(2, 1, 45);
            data.setValue(3, 1, 15);

            data.setValue(0, 2, "25");
            data.setValue(1, 2, "40");
            data.setValue(2, 2, "45");
            data.setValue(3, 2, "15");
        }
        button.disabled = true;
        chart.draw(data, options);
    };

}
google.setOnLoadCallback(renderChart);