/* eslint-disable */

/*  const $ = window.$; <--- getting console error in browser
 `$ has already been declared */

$(document).ready(() => {
  const userEmail = $('#email');
  const crimeTitle = $('#title');
  const crimeBody = $('#body');
  const crimeLocation = $('#latAndLon');

  let crimeId;
  const updating = false;
  let newCrime;
  let crimes;

  // Event listeners for posting, updating, and deleting crimes
  $(document).on('submit', '#crimeSubmit', submitCrime);
  $(document).on('click', '.edit-btn', updateCrime);
  $(document).on('click', '.delete-btn', deleteCrime);

  // function to submit crime and take user to crime page
  async function submitCrime(event) {
    event.preventDefault();
    // wont submit crime if inputs are empty
    if (
      userEmail.val().trim() &&
      crimeTitle.val().trim() &&
      crimeBody.val().trim() &&
      crimeLocation.val().trim()
    ) {
      const GOOGLE_PLACES_API = '';
      const query = crimeLocation.val();

      const googleRes = await $.ajax({
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${GOOGLE_PLACES_API}&query=${query}`
      });
      const { lat, lon } = googleRes.results[0].geometry.location;

      const data = {
        email: userEmail.val().trim(),
        title: crimeTitle.val().trim(),
        body: crimeBody.val().trim(),
        longitude: lon,
        latitude: lat
      };
      const post = await $.ajax({
        method: 'POST',
        url: '/api/crimes',
        data: data
      });
      location.reload();
    }
  }
  if (updating) {
    newCrime.id = crimeId;
    updateCrime(newCrime);
  }
  // function to get Crimes
  function getCrimes(data) {
    $.ajax({
      method: 'GET',
      url: '/api/crimes'
      // crimes = data;
    });
  }
  // function to update Crimes
  function updateCrime() {
    $.ajax({
      method: 'PUT',
      url: '/api/crime' + id,
      data: crimes
    });
  }
  // function to delete Crimes
  function deleteCrime(event) {
    event.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/crime' + id
    }).then(getCrimes);
  }
});
