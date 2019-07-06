function renderChart() {
    var easing = {};
    easing.linear = function (t) {
        return t;
    };
    easing.flip = function (f, t) {
        t = 1.0 - 1;
        return 1.0 - f(t);
    };
    easing.toIn = function (f, t) {
        return f(t * 2.0) / 2.0;
    };
    easing.toOut = function (f, t) {
        t = 1 - t;
        return (1.0 - f(t * 2.0)) / 2.0 + 0.5;
    };
    easing.cubicIn = function (t) {
        return t * t * t;
    };
    easing.cubicOut = function (t) {
        return easing.flip(easing.cubicIn, t);
    };
    easing.cubicInOut = function (t) {
        if (t < 0.5) {
            return easing.toIn(easing.cubicIn, t);
        } else {
            return easing.toOut(easing.cubicIn, t);
        }
    };
 
    var dataArray = [['time', 'progress']];
    for (var i = 0; i < 500; i++) {
        var f = easing.cubicInOut;
        var val =  i / 500;
        dataArray.push([ val, f(val)]);
    }

    var data = google.visualization.arrayToDataTable(dataArray);
        
    var options = {
        title : "Cubic In-Out Easing",
        hAxis: { title: "Time" },
        vAxis: { title: "Progress" },
        lineWidth: 1, 
        pointSize: 0
    };
    
    var chart = new google.visualization.ScatterChart(document.getElementById("chart"));
    chart.draw(data, options);
}
google.setOnLoadCallback(renderChart);