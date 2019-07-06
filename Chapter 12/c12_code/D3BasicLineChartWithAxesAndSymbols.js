var data = [
    { "product": "Shoes", "amount": 40 },
    { "product": "Hats", "amount": 50 },
    { "product": "Coats", "amount": 35 },
    { "product": "Scarves", "amount": 20 }
];
var data2 = [
    { "product": "Shoes", "amount": 25 },
    { "product": "Hats", "amount": 40 },
    { "product": "Coats", "amount": 45 },
    { "product": "Scarves", "amount": 15 }
];
var currentData = data;

var chartTotalWidth = 500;
var chartTotalHeight = 500;
var margin = {
    left: 100,
    right: 50,
    top : 20,
    bottom: 40
};
var width = chartTotalWidth - margin.left - margin.right;
var height = chartTotalHeight - margin.top - margin.bottom;
var main = d3.select("body").append("svg")
    .attr("width", chartTotalWidth)
    .attr("height", chartTotalHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
       
var xScale = d3.scale.ordinal()
    .rangePoints([0, width], 0.4)
    .domain(data.map(function (d) { return d.product; }));
    
var yScale = d3.scale.linear()
    .range([height, 0])
    .domain([0, d3.max(data, function (d) { return d.amount; })]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .outerTickSize(0);
        
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");
        
main.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
    
main.append("g")
    .attr("class", "y axis")
    .call(yAxis);
        
var updateLine = function () {
    var lineBuilder = d3.svg.line()
        .x(function (d) {
            return xScale(d.product);
        })
        .y(function (d) {
            return yScale(d.amount);
        })
        .interpolate("linear");

    var line = main.selectAll(".line")
        .data([currentData]);
          
    line
        .enter().append("path")
        .attr("class", "line")
        .attr("d", function (d) { 
            return lineBuilder(d);
        });
            
    line
        .transition()
        .duration(1000)
        .attr("d", function (d) { 
            return lineBuilder(d);
        });

    var symbol = main.selectAll(".symbol")
        .data(currentData);

    var symbolBuilder = d3.svg.symbol()
        .type("circle")
        .size(180);
        
    symbol
        .enter().append("path")
        .attr("class", "symbol")
        .attr("transform", function (d) {
            return "translate(" + xScale(d.product) +
            "," + yScale(d.amount) + ")";
        })
        .attr("d", function (d) {
            return symbolBuilder(d);
        });

    symbol
        .transition()
        .duration(1000)
        .attr("transform", function (d) {
            return "translate(" + xScale(d.product) +
            "," + yScale(d.amount) + ")";
        });
};
    
updateLine();
    
d3.select("body").append("input")
    .attr("type", "button")
    .attr("value", "click")
    .on("click", function () {
        if (currentData === data) {
            currentData = data2;
        } else {
            currentData = data;
        }
        updateLine();
    });
