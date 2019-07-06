var map;
var njView = new google.maps.LatLng(40.3637892, -74.3553047);

var options = {
    zoom: 8,
    center: njView
};

function createMap(data) {
    var mapElement = document.getElementById("map");
    var geometry, points, heatmap, heatData;
    map = new google.maps.Map(mapElement, options);

    heatData = [];
    for (var i = 0; i < data.features.length; i++) {
        geometry = data.features[i].geometry;
        heatData.push(new google.maps.LatLng(
                geometry.coordinates[1],
                geometry.coordinates[0]));
    }

    points = new google.maps.MVCArray(heatData);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: points,
        radius: 20
    });

    heatmap.setMap(map);
}

$(function () {
    $.ajax({
        type: "GET",
        url: "pupld11b_subset.geojson",
        dataType: "json",
        success: createMap
    });
});
