$(function () {
    $.ajax({
        type: "GET",
        url: "Food_Display_Table.xml",
        dataType: "xml",
        success: loadXml
    });

    var data = [];

    function loadXml(xmlData) {
        $(xmlData).find("Food_Display_Row")
        .each(function () {
            var row = $(this);
            var displayName = row.find("Display_Name").text();
            var saturatedFat = parseFloat(row.find("Saturated_Fats").text());
            var calories = parseFloat(row.find("Calories").text());
            data.push({
                displayName: displayName,
                saturatedFat: saturatedFat,
                calories: calories
            });
        });

        console.log("records loaded: " + data.length);
        renderChart();
    }
    
    function renderChart() {
        $("#chart").igDataChart({
            dataSource: data,
            title: "Saturated Fat vs. Calories",
            subtitle: "Amounts of saturated fat vs. calories in common foods. Data: Data.gov",
            legend: { element: "legend" },
            horizontalZoomable: true,
            verticalZoomable: true,
            axes: [{
                type: "numericX",
                name: "xAxis",
                title: "Saturated Fat",
                strip: "rgba(230,230,230,.4)",
                labalExtent: 50
            }, {
                type: "numericY",
                name: "yAxis",
                title: "Calories",
                strip: "rgba(230,230,230,.4)",
                labalExtent: 50
            }],
            series: [{
                name: "saturatedFatVsCalories",
                type: "scatter",
                xAxis: "xAxis",
                yAxis: "yAxis",
                xMemberPath: "saturatedFat",
                yMemberPath: "calories",
                showTooltip: true,
                tooltipTemplate: "tooltipTemplate",
                title: "Saturated Fat Vs. Calories",
                maximumMarkers: 3000
            }]
        });
    }
    
});
