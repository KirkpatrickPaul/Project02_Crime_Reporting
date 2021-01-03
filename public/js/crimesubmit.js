
const $ = window.$;

$(document).ready(() => {
    const userEmail = $("#userEmail");
    const crimeTitle = $("#crimeTitle");
    const crimeBody = $("#crimeBody");
    const crimeLocation = $("#crimeLoc");

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
        else {
            $.ajax({
                method: "CREATE",
                url: "/api/crime" + id
            }).then(getCrimes)
                window.location.href = "/crime"
        }
    };
    // function to get Crimes
    function getCrimes(){
        $.get("/api/crime", () =>{
            crimes = data;
        })
    };
    // function to update Crimes



    // function to delete Crimes
})