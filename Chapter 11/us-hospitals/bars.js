// Declare the visualization size
var width = 780
var height = 500
var margin = {top: 20, right: 20, bottom: 30, left: 40}
var innerWidth = width - margin.left - margin.right
var innerHeight = height - margin.top - margin.bottom

// Group the hospitals by state
var hospitalsGroupedByState = d3.nest() // Make a grouping function
  .key(function(d) { return d.state }) // Specify that the grouping will by state
  .rollup(function(leaves) { return leaves.length }) // Each group will simply be counted
  .entries(hospitals) // Run that on the list of hospitals to make an array of groups
  .map(function(d) { return { state: d.key, number: d.values } }) // Rename the attributes to state & number
  .sort(function(a, b) { return b.number - a.number }) // Sort by number, descending
  .slice(0, 40) // Take the top 40 hospitals

// Create the scale to space out the bars nicely
var xScale = d3.scale.ordinal()
  .rangeRoundBands([0, innerWidth], 0.2) // The bars will take up 80% of the space
  .domain(hospitalsGroupedByState.map(function(d) { return d.state }))

// Create the scale for the bar height
var yScale = d3.scale.linear()
  .range([innerHeight, 0])
  .domain([0, d3.max(hospitalsGroupedByState, function(d) { return d.number })])

// Create the axis for the states
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")

// Create the axis for the number of hospitals
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(10)

// Create the SVG element to house the visualization
var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

// The main container, offset by the margin
var mainContainer = svg.append("g")
  .attr("class", "main-container")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// The container for the X axis
mainContainer.append("g")
  .attr("class", "x axis-container")
  .attr("transform", "translate(0," + innerHeight + ")")
  .call(xAxis)

// The container for the Y axis
mainContainer.append("g")
  .attr("class", "y axis-container")
  .call(yAxis)

// The bars themselves
mainContainer.selectAll("rect.bar")
  .data(hospitalsGroupedByState)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(d.state) })
    .attr("width", xScale.rangeBand())
    .attr("y", function(d) { return yScale(d.number) })
    .attr("height", function(d) { return innerHeight - yScale(d.number) })
