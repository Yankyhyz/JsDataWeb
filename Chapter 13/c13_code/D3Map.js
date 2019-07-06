var mapWidth = 900;
var mapHeight = 500;

var main = d3
    .select("body")
    .append("svg")
    .attr("width", mapWidth)
    .attr("height", mapHeight);

d3.json("states.json", function (error, states) {
    var statesFeature = topojson.feature(
        states,
        states.objects.gz_2010_us_040_00_20m);

    var path = d3.geo
        .path();

    main
    .selectAll(".state")
    .data(statesFeature.features)
    .enter().append("path")
    .attr("class", "state")
    .attr("d", path);
});