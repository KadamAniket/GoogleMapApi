function initMap() {
    var location = { lat: 20.593, lng: 78.962 };
    const mapElement = document.getElementById("map");
    var map = new google.maps.Map(mapElement, {
        zoom: 4,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    })
}
