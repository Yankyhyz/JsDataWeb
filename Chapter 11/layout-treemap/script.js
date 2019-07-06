var svg = d3.select("body").append("svg")

function updateTreemap(fileData, width, height) {
  var treemap = d3.layout.treemap()
    .size([width, height])
    .children(function(d) { return d.content })
    .value(function(d) { return d.size })

  var nodeData = treemap.nodes(fileData)

  var color = d3.scale.category20c()

  var selection = svg.selectAll("g.node")
    .data(nodeData)

  // Exit
  selection.exit().remove()

  // Enter
  enterSelection = selection.enter().append("g")
    .attr("class", "node")

  enterSelection.append('rect')

  enterSelection.append('text')
    .attr('dx', '0.2em')
    .attr('dy', '1em')

  // Update
  selection
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")" })

  selection.select('rect')
    .attr("width", function(d) { return d.dx })
    .attr("height", function(d) { return d.dy })
    .style("stroke", 'black')
    .style("fill", function(d) { return d.children ? color(d.name) : 'none' })

  selection.select('text')
    .text(function(d) {
      if (d.children || d.dx < 50 || d.dy < 10) return null
      return d.name
    })
}

updateTreemap(FILE_DATA, 700, 400)
