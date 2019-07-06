var width = 700
var height = 500

var voronoi = d3.geom.voronoi()
  .x(function(d) { return d.x * width })
  .y(function(d) { return d.y * height })
  .clipExtent([[0, 0], [width, height]])

var svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height)

var polygonContainer = svg.append('g')

var centerContainer = svg.append('g')

var colors =  d3.scale.category20b()

function polygonToString(d) {
  if (!d) return 'M0,0Z' // In case of duplicates
  return 'M' + d.join('L') + 'Z'
}

function render() {
  // Polygons
  var pathSelection = polygonContainer.selectAll('path')
    .data(voronoi(centers))

  pathSelection.enter().append('path')
    .style('stroke', 'white')
    .style('fill', function(d, i) { return colors(i) })

  pathSelection
    .attr('d', polygonToString)

  pathSelection.exit().remove()

  // Centers
  var centerSelection = centerContainer.selectAll('circle')
    .data(centers)

  centerSelection.enter().append('circle')
    .attr('r', 1.5)

  centerSelection
    .attr('cx', function(d) { return d.x * width })
    .attr('cy', function(d) { return d.y * height })

  centerSelection.exit().remove()
}

render()
