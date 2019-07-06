var svg = d3.select("svg")

svg.selectAll("rect")
  .attr("x", 0)
  .attr("y", function(d, i) { return i * 70 + 30 })
  .attr("width", function(d, i) { return i * 50 + 100 })
  .attr("height", 20)
  .style("fill", "steelblue")
