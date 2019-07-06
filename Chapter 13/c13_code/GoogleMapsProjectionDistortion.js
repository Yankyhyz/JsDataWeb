var map;
var circles = [];
var originView = new google.maps.LatLng(0, 0);

var options = {
    zoom: 1,
    center: originView
};

function createMap() {
    var mapElement = document.getElementById("map");
    var currentFeature, geometry, libraryName, squareFeet,
        minSquareFeet, maxSquareFeet, area, radius, i;
    map = new google.maps.Map(mapElement, options);

    for (i = 0; i < 40; i++) {

        var longitude = Math.random() * 360.0 - 180.0;
        var latitude = Math.random() * 180.0 - 90.0;

        circles.push(new google.maps.Circle({
            center: new google.maps.LatLng(
                latitude,
                longitude),
            map: map,
            radius: 1000000,
            fillOpacity: 1,
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#0066FF',
            strokeColor: '#0047B2'
        }));
    }
}

google.maps.event.addDomListener(window, 'load', createMap);