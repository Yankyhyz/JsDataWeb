var someData = [170, 20, 73, 50]
var svg = d3.select("body").append("svg")

svg.selectAll(".bar").data(someData)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", function(d, i) { return i * 70 + 30 })
    .attr("width", function(d) { return d })
    .attr("height", 20)
    .style("fill", "steelblue")
