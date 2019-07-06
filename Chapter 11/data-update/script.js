var svg = d3.select("svg")

var selection = svg.selectAll("rect")
  .data([170, 20, 73])

selection
  .attr("x", 0)
  .attr("y", function(d, i) { return i * 70 + 30 })
  .attr("width", function(d) { return d })
  .attr("height", 20)
  .style("fill", "steelblue")
