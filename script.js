const sideMenu = document.getElementById("side-menu")

function openmenu(){
    sideMenu.style.right ="0"
   
}
function closemenu() {
    sideMenu.style.right ="-200px"

}

function validateForm() {
    var name = document.forms["contactForm"]["Name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["Message"].value;

    // Regular expression for a valid email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errorMessages = "";

    if (name.trim() === "") {
        errorMessages += "Name field must not be empty.\n";
    }

    if (email.trim() === "") {
        errorMessages += "Email field must not be empty.\n";
    } else if (!emailRegex.test(email)) {
        errorMessages += "Invalid email address.\n";
    }


    if (errorMessages !== "") {
        alert("Please correct the following errors:\n\n" + errorMessages);
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}