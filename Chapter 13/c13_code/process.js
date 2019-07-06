var fs = require("fs");

fs.readFile("pupld11b.geojson", function (err, data) {
    if (err) {
        console.log("Error: " + err);
        return;
    }

    var content = JSON.parse(data);

    var features = [];
    var newCollection = {
        "type": "FeatureCollection",
        "features": features
    };
    var currFeature;

    var count = 0;
    if (content.features && content.features.length) {
        for (var i = 0; i < content.features.length; i++) {
            currFeature = content.features[i];
            if (currFeature !== null &&
                currFeature.properties !== null &&
                currFeature.properties.STABR) {
                if (currFeature.properties.STABR === "NJ") {
                    features.push(currFeature);
                    count++;
                }
            }
        }
    }

    var output = JSON.stringify(newCollection);
    fs.writeFile("pupld11b_subset.geojson", output, function (err) {
        if (err) {
            console.log("Error: " + err);
            return;
        }

        console.log("done, wrote " + count + " features.");
    });
});