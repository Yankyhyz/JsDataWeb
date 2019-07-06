var svg = d3.select("body").append("svg")

function updateBars(barData) {
  var selection = svg.selectAll(".bar")
    .data(barData)

  selection.enter().append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("height", 20)
    .style("fill", "steelblue")

  selection
    .attr("y", function(d, i) { return i * 70 + 30 })
    .attr("width", function(d) { return d })

  selection.exit().remove()
}
