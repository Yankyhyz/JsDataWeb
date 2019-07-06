var svg = d3.select("body").append("svg")

function updateTrends(trendData) {
  var selection = svg.selectAll("g.trend")
    .data(trendData)

  // enter
  var enterSelection = selection.enter().append("g")
    .attr("class", "trend")

  enterSelection.append("text")
    .attr("class", "trend-label")
    .attr("text-anchor", "end")
    .attr("dx", "-0.5em")
    .attr("dy", "1em")
    .attr("x", 100)

  enterSelection.append("rect")
    .attr("class", "score")
    .attr("x", 100)
    .attr("height", 20)

  // update
  selection
    .attr("transform", function(d, i) {
      return "translate(0," + (i * 30 + 20) + ")"
    })

  selection.select(".trend-label")
    .text(function(d) { return d.trend })

  selection.select(".score")
    .attr("width", function(d) { return d.score * 90 })

  // exit
  selection.exit().remove()
}
