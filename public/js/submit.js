// Event handlers to submit crimes
$(document).ready(() => {
  const crimeInput = $();
  const crimeList = $();
  const crimeContainer = $();

  // Event listeners for posting and deleting crimes
  $(document).on('submit', '#crime-form', handleCrimeFormSubmit);
  $(document).on('submit', '#delete-crime', crimeDelete);

  // Getting initial list of Crimes
  getCrimes();
  // Function to handle crime post button submit
  function handleCrimeFormSubmit(event) {
    event.preventDefeault();

    if (
      !nameInput
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
    upsertCrime({
      name: nameInput.val().trim()
    });
  }
  // function for creating a crime. Calls getCrimes when completed
  function upsertCrime(crimeData) {
    $.post('/api/crimes', crimeData).then(getCrimes);
  }
  // Function for creating new list of Crimes
  function createCrimeRow(crimeData) {
    let newTr = $("<tr>");
    newTr.data("crime", crimeData);
    newTr.append("<td>" + crimeData.name + "</td>");
    if (crimeData.Posts) {
        newTr.append("<td>" + crimeData.Posts.length + "</td>");
    }
    else {
        newTr.append("<td>0</td>")
    }
    newTr.append("<td><a href='/blog?crime_id=" + crimeData.id + "'>Go to Crimes</a></td>");
    newTr.append("<td><a href='/cms?crime_id=" + crimeData.id + "'>Create a Crime</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-crime'>Delete Crime</a></td>");
    return newTr;
  }
  // Function to get the Crimes getting them ready for rendering
  function getCrimes() {
    $.get('/api/crimes', function(data) {
      let rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createCrimeRow(data[i]));
      }
      renderCrimeList(rowsToAdd);
      nameInput.val('');
    });
  }
  // Function for rendering the list of Crimes
  function renderCrimeList(rows) {
    crimeList
      .children()
      .not(':last')
      .remove();
    crimeContainer.children('.alert').remove();
    if (rows.length) {
      console.log(rows);
      crimeList.prepend(rows);
    } else {
      renderEmpty();
    }
  }
  // Function for rendering an empty Crime input
  function renderEmpty() {
    let alertDiv = $('<div>');
    alertDiv.addClass('alert alert-danger');
    alertDiv.text('You must create a Crime before you can post it.');
    crimeContainer.append(alertDiv);
  }
  // Function for deleting Crime inputs
  function crimeDelete() {
    const listItemData = $(this)
      .parent('td')
      .parent('tr')
      .data('crime');
    const id = listItemData;
    $.ajax({
      method: 'DELETE',
      url: '/api/crimes/' + id
    }).then(getCrimes);
  }
});
