
const $ = window.$;

$(document).ready(() => {
    const userEmail = $("#userEmail");
    const crimeTitle = $("#crimeTitle");
    const crimeBody = $("#crimeBody");
    const crimeLocation = $("#crimeLoc");

    let crimeId;
    let updating = false;

    // Event listeners for posting, updating, and deleting crimes
    $(document).on("click","#crimeSubmit", submitCrime);
    $(document).on("click",".edit-btn");
    $(document).on("click",".delete-btn");

    getCrimes();

    // function to submit crime and take user to crime page
    function submitCrime(event){
        event.preventDefault();
        // wont submit crime if inputs are empty
        if (!userEmail.val().trim() || !crimeTitle.val().trim() || !crimeBody.val().trim() || !crimeLocation.val().trim()) {
            return;
        }
        // if inputs are valid, sumbit crime and redirect user to crime page
        else {
            $.ajax({
                method: "CREATE",
                url: "/api/crime" + id
            }).then(getCrimes)
                window.location.href = "/crime"
        }
    };
    if (updating) {
        newCrime.id = crimeId;
        updateCrime(newCrime);
    }
    // function to get Crimes
    function getCrimes(){
        $.get("/api/crime", () =>{
            crimes = data;
        })
    };
    // function to update Crimes
    function updateCrime(){
        $.ajax({
            method: "PUT",
            url: "/api/crime",
            data: crimes
        })
    }
    // function to delete Crimes
    function deleteCrime(event){
        event.preventDefault();
        $.ajax({
            method: "DELETE",
            url: "/api/crime" + id
        }).then(getCrimes);
    }
})