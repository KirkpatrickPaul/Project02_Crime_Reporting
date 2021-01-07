/* eslint-disable */

/*  const $ = window.$; <--- getting console error in browser
 `$ has already been declared */

$(document).ready(() => {
  // Event listeners for posting, updating, and deleting crimes
  $('.report-form').on('submit', submitCrime);
  $('.edit-btn').on('click', updateCrime);
  $(document).on('click', '.delete-btn', deleteCrime);
  $(document).on('click', '.edit-submit-btn', sendUpdate);
  $('.card_title').on('keypress', enterHandler);

  // function to submit crime and take user to crime page
  async function submitCrime(event) {
    event.preventDefault();

    const userEmail = $('#email');
    const crimeTitle = $('#title');
    const crimeBody = $('#body');
    const crimeLocation = $('#latAndLon');

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
  // function to update Crimes
  function updateCrime() {
    const crimeId = $(this).data('id');
    const card = $(`#card-${crimeId}`);
    $(`#title-${crimeId}`)
      .attr('contenteditable', true)
      .data('editing', true);

    $(`#body-${crimeId}`)
      .attr('contenteditable', true)
      .data('editing', true);

    $('<button>Submit</button>')
      .attr('type', 'submit')
      .attr('id', 'edit-submit-btn')
      .data('id', crimeId)
      .appendTo(card);
  }

  function enterHandler(event) {
    const keycode = event.keyCode ? event.keyCode : event.which;
    const dataEditing = $(this).data('editing');
    if (keycode === 13 && dataEditing) {
      event.preventDefault();
      console.log('enterHandler Done');
      sendUpdate();
    }
  }

  function sendUpdate() {
    console.log('sendUpdate');
    const crimeId = $(this).data('id');

    $('#edit-submit-btn').remove();

    const newTitle = $(`#title-${crimeId}`);
    newTitle.attr('contenteditable', false).data('editing', false);

    const newBody = $(`#body-${crimeId}`);
    newBody.attr('contenteditable', false).data('editing', false);

    const editData = {
      title: newTitle.val().trim(),
      body: newBody.val().trim()
    };

    $.ajax({
      method: 'PUT',
      url: '/api/crimes/' + crimeId,
      data: editData
    });
  }
  // function to delete Crimes
  function deleteCrime() {
    const crimeId = $(this).data('id');
    const cardBody = $(`#card-${crimeId}`);

    $.ajax({
      method: 'DELETE',
      url: '/api/crimes/' + crimeId,
      data: cardBody
    }).then(() => {
      $(cardBody).remove();
    });
  }
});
