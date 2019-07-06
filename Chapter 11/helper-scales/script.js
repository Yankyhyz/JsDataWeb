var svg = d3.select("body").append("svg")

function updateGdpBars(gdpData, width, height) {
  var countries = gdpData.map(function(d) { return d.country })
  var xScale = d3.scale.ordinal()
    .domain(countries)
    .rangeBands([0, width], 0.2)

  var maxGdp = d3.max(gdpData, function(d) { return d.gdp })
  var yScale = d3.scale.linear()
    .domain([0, maxGdp])
    .range([height - 20, 20])

  var selection = svg.selectAll(".bar")
    .data(gdpData)

  selection.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")

  selection
    .attr("x", function(d) { return xScale(d.country) })
    .attr("y", function(d) { return yScale(d.gdp) })
    .attr("width", xScale.rangeBand())
    .attr("height", function(d) {
      return Math.abs(yScale(d.gdp) - yScale(0))
    })

  selection.exit().remove()
}

var UN_2012_GDP = [
  { country: "United States",  gdp: 16244600 },
  { country: "China",          gdp:  8358400 },
  { country: "Japan",          gdp:  5960180 },
  { country: "Germany",        gdp:  3425956 },
  { country: "France",         gdp:  2611221 },
  { country: "United Kingdom", gdp:  2471600 }
]

updateGdpBars(UN_2012_GDP, 600, 300)
