var map;
var markers = [];
var njView = new google.maps.LatLng(40.3637892, -74.3553047);

var options = {
    zoom: 8,
    center: njView
};

function createMap(data) {
    var mapElement = document.getElementById("map");
    var currentFeature, geometry, libraryName;
    map = new google.maps.Map(mapElement, options);

    for (var i = 0; i < data.features.length; i++) {
        currentFeature = data.features[i];
        
        if (!currentFeature.geometry) {
            continue;
        }
        geometry = currentFeature.geometry;

        libraryName = "Unknown";
        if (currentFeature.properties) {
            libraryName = currentFeature.properties.LIBNAME;
        }

        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(
                geometry.coordinates[1],
                geometry.coordinates[0]),
            map: map,
            title: libraryName
        }));
    }
}

$(function () {
    $.ajax({
        type: "GET",
        url: "pupld11b_subset.geojson",
        dataType: "json",
        success: createMap
    });
});
