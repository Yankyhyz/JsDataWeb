var svg = d3.select("body").append("svg")

// First selection (rows)
var rowSelection = svg.selectAll("g.row").data(matrixData)

rowSelection.exit().remove()

rowSelection.enter().append("g")
  .attr("class", "row")
  .attr("transform", function(d, i) {
    return "translate(0," + (i * 45 + 30) + ")"
  })

// Second selection (cells)
var cellSelection = rowSelection
  .selectAll("g.cell").data(function(d) { return d })

cellSelection.exit().remove()

var enterCellSelection = cellSelection.enter().append("g")
  .attr("class", "cell")
  .attr("transform", function(d, i) {
    return "translate(" + (i * 45 + 30) + ",0)"
  })

// Fill in the cells
enterCellSelection.append("circle")
  .attr("r", function(d) { return Math.sqrt(d * 140 / Math.PI) })

enterCellSelection.append("text")
  .attr("text-anchor", "middle")
  .attr("dy", "0.35em")
  .text(function(d) { return "[" + d + "]" })
