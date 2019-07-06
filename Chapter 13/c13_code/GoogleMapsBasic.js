var map;
var statueOfLiberty = new google.maps.LatLng(40.6897445, -74.0451452);

var options = {
    zoom: 12,
    center: statueOfLiberty
};

function createMap() {
    var mapElement = document.getElementById("map");
    map = new google.maps.Map(mapElement, options);
}

google.maps.event.addDomListener(window, 'load', createMap);
