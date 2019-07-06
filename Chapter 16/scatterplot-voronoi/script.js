var margin = {top: 20, right: 20, bottom: 30, left: 40}
var width = 700 - margin.left - margin.right
var height = 600 - margin.top - margin.bottom

var xScale = d3.scale.linear()
  .range([0, width])

var yScale = d3.scale.linear()
  .range([height, 0])

var voronoi = d3.geom.voronoi()
  .clipExtent([[0, 0], [width, height]])

var xAxis = d3.svg.axis()
  .orient('bottom')
  .scale(xScale)

var yAxis = d3.svg.axis()
  .orient('left')
  .scale(yScale)

var mainContainer = d3.select('body').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

var xAxisContainer = mainContainer.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + height + ')')

xAxisContainer.append('text')
  .attr('class', 'label')
  .attr('x', width)
  .attr('y', -6)
  .style('text-anchor', 'end')

var yAxisContainer = mainContainer.append('g')
  .attr('class', 'y axis')

yAxisContainer.append('text')
  .attr('class', 'label')
  .attr('transform', 'rotate(-90)')
  .attr('dy', '1.2em')
  .style('text-anchor', 'end')

var haloClipContainer = mainContainer.append('g')
  .attr('class', 'halo-clip')

var pointContainer = mainContainer.append('g')
  .attr('class', 'points')

var haloContainer = mainContainer.append('g')
  .attr('class', 'halo')

var hoverContainer = mainContainer.append('g')
  .attr('class', 'hover')

hoverContainer.append('text')
  .style('display', 'none')
  .attr('dx', 18)
  .attr('dy', '0.2em')

function polygonToString(d, i) {
  if (!d) return 'M0,0Z' // In case of duplicates
  return 'M' + d.join('L') + 'Z'
}

function renderScatterplot(data, xMetric, yMetric) {
  xScale
    .domain(d3.extent(data, function(d) { return d[xMetric] }))
    .nice()

  yScale
    .domain(d3.extent(data, function(d) { return d[yMetric] }))
    .nice()

  function setHover(hover) {
    var hoverPoint = hover.point;
    hoverContainer.select('text')
      .style('display', null)
      .attr('x', xScale(hoverPoint[xMetric]))
      .attr('y', yScale(hoverPoint[yMetric]))
      .text(hoverPoint.manufacturer + ' ' + hoverPoint.model + ' (' + hoverPoint.year + ')')
  
    haloContainer.selectAll('path')
      .style("fill", function(d) { return d === hover ? d3.rgb(31, 120, 180) : null })
  }

  function dropHover() {
    hoverContainer.select('text')
      .style('display', 'none')

    haloContainer.selectAll('path')
      .style("fill", null) // Drop fill if there ever was one
  }

  xAxisContainer.call(xAxis)
  xAxisContainer.select('.label').text(xMetric)

  yAxisContainer.call(yAxis)
  yAxisContainer.select('.label').text(yMetric)

  // Halos
  var haloClipSelection = haloClipContainer.selectAll('clipPath').data(data)

  haloClipSelection.enter().append('clipPath')
    .attr('id', function(d, i) { return 'clip-' + i })
    .append('circle')
      .attr('r', 16)

  haloClipSelection.select('circle')
    .attr('cx', function(d) { return xScale(d[xMetric]) })
    .attr('cy', function(d) { return yScale(d[yMetric]) })

  haloClipSelection.exit().remove()

  // Points
  var pointSelection = pointContainer.selectAll('.point').data(data)

  pointSelection.enter().append('circle')
    .attr('class', 'point')
    .attr('r', 2.5)

  pointSelection
    .attr('cx', function(d) { return xScale(d[xMetric]) })
    .attr('cy', function(d) { return yScale(d[yMetric]) })

  pointSelection.exit().remove()

  // Halos
  voronoi
    .x(function(d) { return xScale(d[xMetric]) })
    .y(function(d) { return yScale(d[yMetric]) })

  haloSelection = haloContainer.selectAll('path').data(voronoi(data))

  haloSelection.enter().append('path')
    .attr('clip-path', function(d, i) { return 'url(#clip-' + i +')' })
    .on("mouseover", setHover)
    .on("mouseout", dropHover)

  haloSelection
    .attr('d', polygonToString)

  haloSelection.exit().remove()
}

renderScatterplot(mpg, 'highway', 'city')
