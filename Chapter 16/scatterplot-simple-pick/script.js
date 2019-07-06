var margin = {top: 20, right: 20, bottom: 30, left: 40}
var width = 700 - margin.left - margin.right
var height = 600 - margin.top - margin.bottom

var xScale = d3.scale.linear()
  .range([0, width])

var yScale = d3.scale.linear()
  .range([height, 0])

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

var pointContainer = mainContainer.append('g')
  .attr('class', 'points')

var hoverContainer = mainContainer.append('g')
  .attr('class', 'hover')

hoverContainer.append('text')
  .style('display', 'none')
  .attr('dx', '0.5em')
  .attr('dy', '0.2em')

function renderScatterplot(data, xMetric, yMetric) {
  xScale
    .domain(d3.extent(data, function(d) { return d[xMetric] }))
    .nice()

  yScale
    .domain(d3.extent(data, function(d) { return d[yMetric] }))
    .nice()

  function setHover(hover, i) {
    hoverContainer.select('text')
      .style('display', null)
      .attr('x', xScale(hover[xMetric]))
      .attr('y', yScale(hover[yMetric]))
      .text(hover.manufacturer + ' ' + hover.model + ' (' + hover.year + ')')
  }

  function dropHover() {
    hoverContainer.select('text')
      .style('display', 'none')
  }

  xAxisContainer.call(xAxis)
  xAxisContainer.select('.label').text(xMetric)

  yAxisContainer.call(yAxis)
  yAxisContainer.select('.label').text(yMetric)

  var pointSelection = pointContainer.selectAll('.point').data(data)

  pointSelection.enter().append('circle')
    .attr('class', 'point')
    .attr('r', 2.5)
    .on('mouseenter', setHover)
    .on('mouseleave', dropHover)

  pointSelection
    .attr('cx', function(d) { return xScale(d[xMetric]) })
    .attr('cy', function(d) { return yScale(d[yMetric]) })

  pointSelection.exit().remove()
}

renderScatterplot(mpg, 'highway', 'city')
