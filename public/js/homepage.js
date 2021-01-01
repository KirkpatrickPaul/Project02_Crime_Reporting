/* eslint-disable */
// Initialize and add the map
function initMap() {
  const kansasCity = { lat: 39.099728, lng: -94.578568 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: kansasCity
  });
  const marker = new google.maps.Marker({
    position: kansasCity,
    map: map
  });
}