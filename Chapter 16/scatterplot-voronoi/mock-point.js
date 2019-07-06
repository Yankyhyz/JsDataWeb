var hover = mpg[35]
hoverContainer.select('text')
  .style('display', null)
  .attr('x', xScale(hover['highway']))
  .attr('y', yScale(hover['city']))
  .text(hover.manufacturer + ' ' + hover.model + ' (' + hover.year + ')')


haloContainer.selectAll('path')
  .style("fill", function(d, i) { return i === 35 ? d3.rgb(31, 120, 180) : null })