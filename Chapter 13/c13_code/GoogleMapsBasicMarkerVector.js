var map;
var statueOfLiberty = new google.maps.LatLng(40.6897445, -74.0451452);
var statueMarker;

var options = {
    zoom: 12,
    center: statueOfLiberty
};

function createMap() {
    var mapElement = document.getElementById("map");
    map = new google.maps.Map(mapElement, options);

    statueMarker = new google.maps.Marker({
        position: statueOfLiberty,
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            strokeColor: 'red',
            strokeWeight: 5
        },
        title: "Statue of Liberty"
    });
}

google.maps.event.addDomListener(window, 'load', createMap);
