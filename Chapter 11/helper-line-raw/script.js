var svg = d3.select("body").append("svg")

svg.append("path")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .attr("d", "M10,10L100,100L100,200L150,50L200,75")
