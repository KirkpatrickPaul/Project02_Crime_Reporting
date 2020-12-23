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



/*Error:    6:19  error  'google' is not defined                        no-undef
Error:    6:59  error  Strings must use singlequote                   quotes

Error:   11:9   error  'marker' is assigned a value but never used    no-unused-vars
Error:   11:22  error  'google' is not defined                        no-undef

Error:   15:2   error  Newline required at end of file but not found  eol-last*/
