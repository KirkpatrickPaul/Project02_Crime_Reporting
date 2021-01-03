
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
    function submitCrime(post){
        $.post("/api/crimes", post, () => {
            window.location.href = "/crime"
        });
    }
})