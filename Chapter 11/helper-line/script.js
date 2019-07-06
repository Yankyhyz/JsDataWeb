var points = [
  { x: 10,  y: 10  },
  { x: 100, y: 100 },
  { x: 100, y: 200 },
  { x: 150, y: 50  },
  { x: 200, y: 75  }
]

var lineFn = d3.svg.line()
  .x(function(d) { return d.x })
  .y(function(d) { return d.y })

var svg = d3.select("body").append("svg")

console.log(lineFn(points))
// => "M10,10L100,100L100,200L150,50L200,75"

svg.append("path")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .attr("d", lineFn(points))
