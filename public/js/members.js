/* eslint-disable */
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

const $ = window.$;

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(data => {
    $('.member-name').text(data.email);
  });
});
