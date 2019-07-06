// Custom visualization size
var width = 780
var height = 500

// Make a projection.
// albersUsa transposes Alaska and Hawaii next to the continental USA
var projection = d3.geo.albersUsa()
  .scale(1000)
  .translate([width / 2, height / 2])

// Create a path maker from the projection
var path = d3.geo.path()
  .projection(projection)

// Use topojson to create the point arrays for each feature that will be rendered
function ignoreExteriorBorders(a, b) { return a !== b }
var landPoints = topojson.feature(unitedStates, unitedStates.objects.land)
var countyBoundaryPoints = topojson.mesh(unitedStates, unitedStates.objects.counties, ignoreExteriorBorders)
var stateBoundaryPoints = topojson.mesh(unitedStates, unitedStates.objects.states, ignoreExteriorBorders)

// Project each hospitals lat/lon into an x, y pixel space co-ordinate
var hospitalPositions = hospitals.map(function(hospital) {
  var xyPosition = projection([hospital.lon, hospital.lat])
  return {
    name: hospital.name,
    x: xyPosition[0],
    y: xyPosition[1]
  }
})

// Compute the Voronoi diagram of airports' projected positions.
var voronoi = d3.geom.voronoi()
  .x(function(d) { return d.x })
  .y(function(d) { return d.y })
  .clipExtent([[0, 0], [width, height]])

// Create the SVG
var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

// Render the land silhouette so that it can be used to clip the Voronoi cells later
svg.append("clipPath")
  .attr("id", "land-clip")
  .append("path")
    .attr("d", path(landPoints))

// Render the land mass
svg.append("path")
  .attr("class", "land")
  .attr("d", path(landPoints))

// Add county boundaries
svg.append("path")
  .attr("class", "county-boundary")
  .attr("d", path(countyBoundaryPoints))

// Add state boundaries
svg.append("path")
  .attr("class", "state-boundary")
  .attr("d", path(stateBoundaryPoints))

// The hospital name will be shown here on hover
var hospitalNameLabel = svg.append("text")
  .attr("x", width / 2)
  .attr("y", 50)

// Create a container for the Voronoi lines
var voronoiContainer = svg.append("g")
  .attr("class", "voronoi-container")
  .attr('clip-path', 'url(#land-clip)') // Clip the entire Voronoi container to the land shape

// Render every Voronoi cell and set up the hover over event listens
var mouseOn = null
voronoiContainer.selectAll("path").data(voronoi(hospitalPositions))
  .enter().append("path")
    .attr("d", function(d) { return 'M' + d.join('L') + 'Z' })
    .on("mouseenter", function(d) {
      if (mouseOn) mouseOn.style('fill', null)
      hospitalNameLabel.text(d.point.name)
      mouseOn = d3.select(this).style('fill', 'steelblue')
    })
    .on("mouseleave", function(d) {
      if (!mouseOn) return
      hospitalNameLabel.text(null)
      mouseOn.style('fill', null)
      mouseOn = null
    })

// Render a point for each hospital
var pointContainer = svg.append("g")
  .attr("class", "point-container")

pointContainer.selectAll("circle").data(hospitalPositions)
  .enter().append("circle")
    .attr("cx", function(hospital) { return hospital.x })
    .attr("cy", function(hospital) { return hospital.y })
    .attr("r", 1)
