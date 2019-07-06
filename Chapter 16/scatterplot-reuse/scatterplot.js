function scatterplot() {
  var options = {
    width: 700,
    height: 600,
    margin: {top: 20, right: 20, bottom: 30, left: 40},
    xLabel: null,
    yLabel: null,
    x: function(d) { return d[0] },
    y: function(d) { return d[1] }
  }

  var xScale = d3.scale.linear()
  var yScale = d3.scale.linear()

  var xAxis = d3.svg.axis()
    .orient('bottom')
    .scale(xScale)

  var yAxis = d3.svg.axis()
    .orient('left')
    .scale(yScale)

  function render(selection) {
    var margin = options.margin
    var innerWidth = options.width - margin.left - margin.right
    var innerHeight = options.height - margin.top - margin.bottom

    xScale.range([0, innerWidth])
    yScale.range([innerHeight, 0])

    selection.each(function(data) {
      xScale.domain(d3.extent(data, options.x)).nice()
      yScale.domain(d3.extent(data, options.y)).nice()

      // -------------
      var svgContainer = d3.select(this).selectAll('svg.scatterplot').data([data])
      svgContainer.enter().append('svg').attr('class', 'scatterplot')

      svgContainer
        .attr('width', options.width)
        .attr('height', options.height)

      // -------------
      var mainContainer = svgContainer.selectAll('g.main').data([data])
      mainContainer.enter().append('g').attr('class', 'main')

      mainContainer
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      // -------------
      var xAxisContainer = mainContainer.selectAll('g.x.axis').data([data])
      xAxisContainer.enter().append('g').attr('class', 'x axis')

      xAxisContainer
        .attr('transform', 'translate(0,' + innerHeight + ')')
        .call(xAxis)

      // -------------
      var xLabelSelection = xAxisContainer.selectAll('text.label').data([data])
      xLabelSelection.enter().append('text').attr('class', 'label')
        .attr('y', -6)
        .style('text-anchor', 'end')

      xLabelSelection
        .attr('x', innerWidth)
        .text(options.xLabel)

      // -------------
      var yAxisContainer = mainContainer.selectAll('g.y.axis').data([data])
      yAxisContainer.enter().append('g').attr('class', 'y axis')

      yAxisContainer
        .call(yAxis)

      // -------------
      var yLabelSelection = yAxisContainer.selectAll('text.label').data([data])
      yLabelSelection.enter().append('text').attr('class', 'label')
        .attr('transform', 'rotate(-90)')
        .attr('dy', '1.2em')
        .style('text-anchor', 'end')

      yLabelSelection
        .text(options.yLabel)

      // -------------
      var pointContainer = mainContainer.selectAll('g.points').data([data])
      pointContainer.enter().append('g').attr('class', 'points')

      // -------------
      var pointSelection = pointContainer.selectAll('.point').data(data)
      pointSelection.enter().append('circle').attr('class', 'point')
        .attr('r', 2.5)

      pointSelection
        .attr('cx', function(d) { return xScale(options.x(d)) })
        .attr('cy', function(d) { return yScale(options.y(d)) })

      pointSelection.exit().remove()
    })
  }

  // Make options configurable
  Object.keys(options).forEach(function(optionName) {
    render[optionName] = function(value) {
      if (!arguments.length) return options[optionName]
      options[optionName] = value
      return render
    }
  })

  return render
}
