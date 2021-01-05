/* eslint-disable */

/*  const $ = window.$; <--- getting console error in browser
 `$ has already been declared */

 $(document).ready(() => {
  const userEmail = $('.crimeEmail');
  const crimeTitle = $('.crimeTitle');
  const crimeBody = $('.crimeBody');
  const crimeLocation = $('#latAndLon');

  const data = {
    email: userEmail.val().trim(), 
    title: crimeTitle.val().trim(),
    body: crimeBody.val().trim(),
    location: crimeLocation.val().trim()
  }

  let post;
  let crimeId;
  const updating = false;
  let newCrime;
  let crimes;

  // Event listeners for posting, updating, and deleting crimes
  $(document).on('click', '#crimeSubmit', submitCrime);
  $(document).on('click', '.edit-btn', updateCrime);
  $(document).on('click', '.delete-btn', deleteCrime);

  getCrimes();

  // function to submit crime and take user to crime page
  function submitCrime (event) {
    event.preventDefault();
    // wont submit crime if inputs are empty
    if (
      !userEmail.val().trim() ||
      !crimeTitle.val().trim() ||
      !crimeBody.val().trim() ||
      !crimeLocation.val().trim()
    ) {return}
    // if inputs are valid, sumbit crime and redirect user to crime page
    else {
      $.ajax({
        method: 'POST',
        url: '/api/crimes',
        data: data
      }).then();
      window.location.href = '/crimes';
    }
  }
  if (updating) {
    newCrime.id = crimeId;
    updateCrime(newCrime);
  }
  // function to get Crimes
  function getCrimes (data) {
    $.ajax({
      method: 'GET',
      url: '/api/crimes'
      // crimes = data;
    });
  }
  // function to update Crimes
  function updateCrime (event) {
    event.preventDefault();
    $.ajax({
      method: 'PUT',
      url: '/api/crime',
      data: data
    });
  }
  // function to delete Crimes
  function deleteCrime (event) {
    event.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/crime',
      data: data
    })
  }
});
