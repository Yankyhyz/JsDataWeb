var fs = require("fs");
var numItems = 1000000;
var buf = new Buffer(numItems * 4);

var currValue = 1000.0;

for (var i = 0; i < numItems; i++) {
    currValue += -2.0 + Math.random() * 4.0;
    buf.writeFloatLE(currValue, i * 4);
}

fs.writeFile("data.bin", buf, function (err) {
    if (err) {
        console.log("Error writing file: " + err);
    }
    console.log("file written.");
});