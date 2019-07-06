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
            var milk = parseFloat(row.find("Milk").text());
            data.push({
                displayName: displayName,
                saturatedFat: saturatedFat,
                calories: calories,
                milk: milk
            });
        });

        data.sort(function (v1, v2) {
            if (v1.milk < v2.milk) {
                return -1;
            }
            if (v1.milk > v2.milk) {
                return 1;
            }
            return 0;
        });
        console.log("records loaded: " + data.length);
        renderChart();
    }
    
    function renderChart() {
        $("#chart").igDataChart({
            dataSource: data,
            title: "Saturated Fat vs. Calories",
            subtitle: "Amounts of saturated fat vs. calories in common foods. Data: Data.gov",
            horizontalZoomable: true,
            verticalZoomable: true,
            axes: [{
                type: "numericX",
                name: "xAxis",
                title: "Saturated Fat",
                strip: "rgba(230,230,230,.4)"
            }, {
                type: "numericY",
                name: "yAxis",
                title: "Calories",
                strip: "rgba(230,230,230,.4)"
            }],
            series: [{
                name: "saturatedFatVsCalories",
                type: "bubble",
                xAxis: "xAxis",
                yAxis: "yAxis",
                xMemberPath: "saturatedFat",
                yMemberPath: "calories",
                radiusMemberPath: "milk",
                fillMemberPath: "milk",
                labelMemberPath: "displayName",
                showTooltip: true,
                tooltipTemplate: "tooltipTemplate",
                title: "Saturated Fat Vs. Calories",
                maximumMarkers: 3000,
                radiusScale: {
                    minimumValue: 10,
                    maximumValue: 25
                },
                fillScale: {
                    type: "value",
                    brushes: ["red", "orange", "yellow"]
                }

            }]
        });
    }
    
});
