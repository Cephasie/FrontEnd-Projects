const email = document.getElementById("emailBoxSignUp");
const password = document.getElementById("passBoxSignUp");
const password2 = document.getElementById("passBoxReSignUp");
const form = document.getElementById("form");
const ptag = document.getElementById("pTagSign");
const username = document.getElementById("userNameSignUp");

// let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
// let pattern2 = /[A-Za-z]+[0-9]/;

let emailSignPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";
let passSignPattern = "[a-zA-Z0-9]";

function validateSignUpForm(event) {
    event.preventDefault();
    const userInformaton = {};

    let firstEmail = email.value;
    let firstPassword = password.value;
    let secPassword = password2.value;
    let userName = username.value;

    if (firstEmail.match(emailSignPattern) && firstPassword.match(passSignPattern)){
        if (secPassword === firstPassword) {
            userInformaton.email = firstEmail;
            userInformaton.password = firstPassword;
            userInformaton.username = userName;
            console.log(userInformaton)
            console.log(true);
        }
        else{
            ptag.innerHTML = "Password does not match!"
            console.log("false");
        }
 }
    else {
        if (!firstEmail.match(emailSignPattern)) {
            ptag.innerHTML = "Invalid Email!";
        }
        if (!firstPassword.match(passSignPattern)) {
            ptag.innerHTML = "invalid password. your password should contain letters and numbers";
            console.log("false");
        }
        if (!secPassword==(firstPassword)) {
            ptag.innerHTML = "Invalid password!";
            console.log("false");
        }
    }
    // console.log(firstEmail, firstPassword, secPassword);
}

form.addEventListener("submit", validateSignUpForm);