
const $ = window.$;

$(document).ready(() => {
    const userEmail = $("#userEmail");
    const crimeTitle = $("#crimeTitle");
    const crimeBody = $("#crimeBody");
    const crimeLocation = $("#crimeLoc");

    // Event listeners for posting, updating, and deleting crimes
    $(document).on("click","#crimeSubmit", submitCrime);
    $(document).on("click",);
    $(document).on("click",);

    // function to submit crime and take user to crime page
    function submitCrime(event){
        event.preventDefault();
        // wont submit crime if inputs are empty
        if (!userEmail.val().trim() || !crimeTitle.val().trim() || !crimeBody.val().trim() || !crimeLocation.val().trim()) {
            return;
        }
        else {
            
        }



    }
})