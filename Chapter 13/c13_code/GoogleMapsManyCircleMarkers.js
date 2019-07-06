var map;
var circles = [];
var njView = new google.maps.LatLng(40.3637892, -74.3553047);

var options = {
    zoom: 8,
    center: njView
};

function createMap(data) {
    var mapElement = document.getElementById("map");
    var currentFeature, geometry, libraryName, visits,
        minVisits, maxVisits, area, radius, i;
    map = new google.maps.Map(mapElement, options);

    for (i = 0; i < data.features.length; i++) {
        currentFeature = data.features[i];
        visits = currentFeature.properties.VISITS;

        if (i === 0) {
            minVisits = visits;
            maxVisits = visits;
        } else {
            minVisits = Math.min(minVisits, visits);
            maxVisits = Math.max(maxVisits, visits);
        }
    }

    for (i = 0; i < data.features.length; i++) {
        currentFeature = data.features[i];
        
        if (!currentFeature.geometry) {
            continue;
        }
        geometry = currentFeature.geometry;
        visits = currentFeature.properties.VISITS;

        libraryName = "Unknown";
        if (currentFeature.properties) {
            libraryName = currentFeature.properties.LIBNAME;
        }

        area = (visits - minVisits) / (maxVisits - minVisits) 
        * 500000000 + 100000;
        radius = Math.sqrt(area / Math.PI);

        circles.push(new google.maps.Circle({
            center: new google.maps.LatLng(
                geometry.coordinates[1],
                geometry.coordinates[0]),
            map: map,
            radius: radius,
            fillOpacity: .7,
            strokeOpacity: .7,
            strokeWeight: 2,
            title: libraryName,
            visits: currentFeature.properties.VISITS,
            fillColor: '#0066FF',
            strokeColor: '#0047B2'
        }));

        google.maps.event.addListener(circles[i],'mouseover',onMouseOver);
             

        google.maps.event.addListener(circles[i], 'mouseout', onMouseOut);
             
    }

    function onMouseOver() {
        map.getDiv().setAttribute('title',this.get('title') + ": " + this.get('visits'));
    }

    function onMouseOut() {
        map.getDiv().removeAttribute('title');
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
