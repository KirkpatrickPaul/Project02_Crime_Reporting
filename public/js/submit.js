// Event handlers to submit crimes
$(document).ready(() => {
    const crimeInput = $();
    const crimeList = $();
    const crimeContainer = $();

    $(document).on("submit", "", )

    // Getting initial list of Crimes
    getCrimes();
    // Function to get the Crimes getting them ready for rendering
    function getCrimes () {
        $.get("/api/crimes", function(data){
            let rowsToAdd = [];
            for (var i = 0; i < data.length; i++){
                rowsToAdd.push(createCrimeRow(data[i]));
            }
            renderCrimeList(rowsToAdd);
            nameInput.val("");
        });
    }
    // Function for rendering the list of Crimes
    function renderCrimeList(rows) {
        crimeList.children().not(":last").remove();
        crimeContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            crimeList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }
    // Function for rendering an empty Crime input
    function renderEmpty() {
        let alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create a Crime before you can post it.");
        crimeContainer.append(alertDiv);
    }
    
























})