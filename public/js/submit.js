// Event handlers to submit crimes
$(document).ready(() => {
    const crimeInput = $();
    const crimeList = $();
    const crimeContainer = $();

    $(document).on("submit", "", )

    // getting initial list of Crimes
    getCrimes();

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
























})