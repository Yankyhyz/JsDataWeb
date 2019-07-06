var hover = mpg[35]
hoverContainer.select('text')
  .style('display', null)
  .attr('x', xScale(hover['highway']))
  .attr('y', yScale(hover['city']))
  .text(hover.manufacturer + ' ' + hover.model + ' (' + hover.year + ')')
