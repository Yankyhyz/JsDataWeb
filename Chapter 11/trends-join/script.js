var svg = d3.select("body").append("svg")

function updateTrends(trendData) {
  var selection = svg.selectAll("g.trend")
    .data(trendData, function(d) { return d.trend })

  // enter
  var enterSelection = selection.enter().append("g")
    .attr("class", "trend")

  enterSelection.append("text")
    .attr("class", "trend-label")
    .attr("text-anchor", "end")
    .attr("dx", "-0.5em")
    .attr("dy", "1em")
    .attr("x", 100)
    .text(function(d) { return d.trend })

  enterSelection.append("rect")
    .attr("class", "score")
    .attr("x", 100)
    .attr("height", 20)

  // update
  selection
    .attr("transform", function(d, i) {
      return "translate(0," + (i * 30 + 20) + ")"
    })

  selection.select(".score")
    .attr("width", function(d) { return d.score * 90 })

  // exit
  selection.exit().remove()
}
