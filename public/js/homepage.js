/* eslint-disable */
// Initialize and add the map
function initMap () {
  // The location of kansasCity
  const kansasCity = { lat: 39.099728, lng: -94.578568 };
  // The map, centered at kansasCity
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: kansasCity
  });
  // The marker, positioned at kansasCity
  const marker = new google.maps.Marker({
    position: kansasCity,
    map: map
  });
}
initMap();
