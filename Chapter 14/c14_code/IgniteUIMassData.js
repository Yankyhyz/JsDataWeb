$(function () {
   
   function renderChart(data) {
        $("#chart").igDataChart({
            dataSource: data,
            width: "700px",
            height: "500px",
            horizontalZoomable: true,
            verticalZoomable: true,
            axes: [{
                name: "xAxis",
                label: "label",
                type: "categoryX",
                labelAngle: 45
            }, {
                name: "yAxis",
                type: "numericY"
            }],
            series: [{
                name: "line",
                xAxis: "xAxis",
                yAxis: "yAxis",
                type: "line",
                showTooltip: true,
                valueMemberPath: "value",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true
            }],
        });
   };
   
   var xhr = new XMLHttpRequest();
   xhr.onload = function () {
        if (xhr.status == 200) {
            var arrayBuffer = xhr.response;
            
            var dataView = new DataView(arrayBuffer);
            var numItems = arrayBuffer.byteLength / 4;
            
            var data = [];
            for (var i = 0; i < numItems; i++) {
                data.push({ 
                    label: "Item " + i.toString(),
                    value: dataView.getFloat32(i * 4,  true)
                });
            }
            
            renderChart(data);
        }
   };
    
    xhr.open("GET", "data.bin");
    xhr.responseType = "arraybuffer";
    xhr.send(null);
});
