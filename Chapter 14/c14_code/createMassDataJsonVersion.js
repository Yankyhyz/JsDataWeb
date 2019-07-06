var fs = require("fs");
var numItems = 1000000;
var data = [];
var outputObject = {};

var currValue = 1000.0;
for (var i = 0; i < numItems; i++) {
    currValue += -2.0 + Math.random() * 4.0;
    data.push(currValue);
}
outputObject.data = data;

fs.writeFile("data.json", JSON.stringify(outputObject), function (err) {
    if (err) {
        console.log("Error writing file: " + err);
    }
    console.log("file written.");
});