// Create and configure the charts
var highwayCityChart = scatterplot()
  .width(300)
  .height(300)
  .x(function(d) { return d.highway })
  .xLabel('Highway / mpg')
  .y(function(d) { return d.city })
  .yLabel('City / mpg')

var displacementCityChart = scatterplot()
  .width(300)
  .height(300)
  .x(function(d) { return d.displ })
  .xLabel('Displacement / L')
  .y(function(d) { return d.city })
  .yLabel('City / mpg')

// Attach the data to the element that will hold the chart and 'call' it.
d3.select('#chart1').datum(mpg)
  .call(highwayCityChart)

d3.select('#chart2').datum(mpg)
  .call(displacementCityChart)
