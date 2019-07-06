var mapWidth = 900;
var mapHeight = 500;

var main = d3
    .select("body")
    .append("svg")
    .attr("width", mapWidth)
    .attr("height", mapHeight);

var dark = '#08293D';
var light = '#D0E5F2';

var currentYear = 2004;
var firstYear = 0;
var data = [];
var currentData;
var currentMap;
var statesFeature;

d3.json("states.json", function (error, states) {
    d3.csv("farmoutput.csv", function (error, farmoutput) {
        d3.csv("stateabbreviations.csv", function (error,
            stateAbbreviations) {
            statesFeature = topojson.feature(
                states,
                states.objects.gz_2010_us_040_00_20m);
            var i, j, currItem;

            var abbreviationsMap = {};

            var allAbbrev = [];
            for (i = 0; i < stateAbbreviations.length; i++) {
                abbreviationsMap[stateAbbreviations[i].Abbreviation] =
                    stateAbbreviations[i].Name;
                allAbbrev.push(stateAbbreviations[i].Abbreviation);
            }
            
            for (i = 0; i < farmoutput.length; i++) {
                var year = farmoutput[i];
                var yearNumber = parseInt(year.Year, 10);
                if (i === 0) {
                    firstYear = yearNumber;
                }
                currItem = {};
                currItem.year = yearNumber;
                currItem.states = [];
                for (j = 0; j < allAbbrev.length; j++) {
                    currItem.states.push({ 
                        name: abbreviationsMap[allAbbrev[j]],
                        value: parseFloat(year[allAbbrev[j]])
                    });
                }
                data.push(currItem);
            }

            var select = d3.select("select");

            select
            .selectAll("option")
            .data(data)
            .enter()
            .append("option")
            .attr("value", function (d) { return d.year; })
            .text(function (d) { return d.year; })
            .attr("selected", function (d) {
                if (d.year == currentYear) {
                    return "selected";
                }
                return null;
            });

            select.on("change", function () {
                currentYear = this.value;
                renderMap();
            });

            renderMap();

            d3.select("body")
            .append("div")
            .text("Source: http://www.ers.usda.gov/data-products/agricultural-productivity-in-the-us.aspx#.UyPIrIW-hWY");
        });
    });
});

function renderMap() {
    var index = currentYear - firstYear;
    var i;

    currentData = data[index];
    currentMap = {};
    for (i = 0; i < currentData.states.length; i++) {
        currentMap[currentData.states[i].name] =
            currentData.states[i].value;
    }

    var path = d3.geo
        .path();

    var max = d3.max(statesFeature.features, function (d) {
        return currentMap[d.properties.NAME] / path.area(d);
    });
    var min = d3.min(statesFeature.features, function (d) {
        return currentMap[d.properties.NAME] / path.area(d);
    });

    var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("z-index", 500)
    .style("visibility", "hidden");

    var colorScale = d3.scale.linear()
    .domain([min, max])
    .range([light, dark]);

    var states = main
    .selectAll(".state")
    .data(statesFeature.features);

    states
    .enter().append("path")
    .attr("class", "state")
    .attr("d", path)
    .on("mouseenter", function () {
        tooltip.style("visibility", "visible");
    })
    .on("mouseleave", function () {
        tooltip.style("visibility", "hidden");
    })
    .on("mousemove", function (d) {
        tooltip.style("top", (d3.event.pageY + 10) + "px")
        .style("left", (d3.event.pageX + 15) + "px")
        .text(d.properties.NAME + ": " + currentMap[d.properties.NAME]);
    });

    states
    .transition()
    .duration(1000)
    .delay(function (d) {
        return (path.bounds(d)[0][0] / mapWidth) * 2000;
    })
    .style("stroke", "#FF6600")
    .style("stroke-width", "2")
    .style("fill", function (d) {
        return colorScale(currentMap[d.properties.NAME] / path.area(d));
    })
    .transition()
    .duration(500)
    .style("stroke", "#29658A")
    .style("stroke-width", "1");
}