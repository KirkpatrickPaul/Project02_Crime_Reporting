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
  $('.report-form').on('submit', submitCrime);
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
      const query = crimeLocation.val();
      const googleRes = await $.ajax({
        method: 'POST',
        url: `/api/places`,
        data: { data: query }
      });
      const jsonRes = JSON.parse(googleRes);
      console.log('jsonRes :>> ', jsonRes);
      const { lat, lng } = jsonRes.results[0].geometry.location;
      const data = {
        email: userEmail.val().trim(),
        title: crimeTitle.val().trim(),
        body: crimeBody.val().trim(),
        longitude: lng,
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
