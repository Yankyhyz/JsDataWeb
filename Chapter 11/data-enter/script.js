var svg = d3.select("svg")

var selection = svg.selectAll("rect")
  .data([170, 20, 73, 50])

selection
  .attr("x", 0)
  .attr("y", function(d, i) { return i * 70 + 30 })
  .attr("width", function(d) { return d })
  .attr("height", 20)
  .style("fill", "steelblue")

selection.enter().append("rect")
  .attr("x", 200)
  .attr("y", 100)
  .attr("width", 30)
  .attr("height", 30)
  .style("fill", "red")
