// let welcomeText= document.getElementById("welcome");
// document.firstElementChild.innerHTML = `Welcome, ${emailInput.value}`;

const form = document.getElementById("form");
const button = document.querySelector(".sign_In");
let confirmPassword = document.getElementById("pass1");
let message = document.querySelector(".pTag");

let create = function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let password = document.getElementById("pass2");
    
    let emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]*/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;    
   
    if (emailPattern.test(email.value) && passwordPattern.test(password.value)) {
       
        if (confirmPassword.value === password.value) {
            message.textContent = ""
            let outPut = {
                name1 : name.value,
                email1 : email.value,
                password1 : password.value
            }
            console.log(outPut)
        }
         
    } else {
        if(!passwordPattern.test(password.value)){
        message.textContent = "Password not provided or provided password does not match. Password must contain an uppercase, lower and number";
        console.log(message.textContent);
    }

        else{
            message.textContent = "Email not provied or provided email is invalid";
            console.log(message.textContent);
        }
    }

}
form.addEventListener("submit", create)


..................

function validateSignUpForm() {
    let userSignInput = document.getElementById("userNameSignUp");
    let emailSignInput = document.getElementById("emailBoxSignUp");
    let passSignInput = document.getElementById("passBoxSignUp");
    let passSignInputRe = document.getElementById("passBoxReSignUp");

    let userSignPattern = "[a-zA-Z]";
    let emailSignPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";
    let passSignPattern = "[a-zA-Z0-9]";
    let passSignPatternRe = "[a-zA-Z0-9]";

    // Check if the username is valid
    if (!userSignInput.value.match(userSignPattern)) {
        userSignInput.setCustomValidity("Username must start with a letter.");
        return false;
    }

    // Check if the email is valid
    if (!emailSignInput.value.match(emailSignPattern)) {
        emailSignInput.setCustomValidity("Invalid email address.");
        return false;
    }

    // Check if the passwords match
    if (passSignInput.value != passSignInputRe.value) {
        passSignInput.setCustomValidity("Passwords do not match.");
        passSignInputRe.setCustomValidity("Passwords do not match.");
        return false;
    }

    // All good!
    return true;
}



const email = document.getElementById("email");
const password = document.getElementById("pass-box");
const password2 = document.getElementById("pass");
const form = document.getElementById("form");
const ptag = document.getElementById("tag");


let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
let pattern2 = /[A-Za-z]+[0-9]/;

function validation(event) {
    event.preventDefault();
    const formData = {};

    let firstEmail = email.value;
    let firstPassword = password.value;
    let secPassword = password2.value;

    if (firstEmail.match(pattern) && firstPassword.match(pattern2)) {
        if (secPassword === firstPassword) {
            formData.email = firstEmail;
            formData.password = firstPassword;
            console.log(formData)
            console.log(true);
        }
        else{
            ptag.innerHTML = "Password does not match"
            console.log("false");
        }
 }
    else {
        if (!firstEmail.match(pattern)) {
            ptag.innerHTML = "Invalid Email";
        }
        if (!firstPassword.match(pattern2)) {
            ptag.innerHTML = "invalid password. your password should contain letters and numbers";
            console.log("false");
        }
        if (!secPassword==(firstPassword)) {
            ptag.innerHTML = "Invalid password";
            console.log("false");
        }
    }
    // console.log(firstEmail, firstPassword, secPassword);
}

form.addEventListener("submit", validation);



// function validateSignUpForm(){
//     let userSignInput = document.getElementById("userNameSignUp");
//     let emailSignInput = document.getElementById("emailBoxSignUp");
//     let passSignInput = document.getElementById("passBoxSignUp");
//     let passSignInputRe = document.getElementById("passBoxReSignUp");

//     let userSignPattern = "[a-zA-Z]";
//     let emailSignPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";
//     let passSignPattern = "[a-zA-Z0-9]";
//     let passSignPatternRe = "[a-zA-Z0-9]";
    

    function validateSignUpForm() {
    let userSignInput = document.getElementById("userNameSignUp");
    let emailSignInput = document.getElementById("emailBoxSignUp");
    let passSignInput = document.getElementById("passBoxSignUp");
    let passSignInputRe = document.getElementById("passBoxReSignUp");

    let emailSignPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";
    let userSignPattern = "[a-zA-Z]";
    
    // let passSignPattern = "[a-zA-Z0-9]";
    // let passSignPatternRe = "[a-zA-Z0-9]";

    if(userSignInput.value.match(userSignPattern)){
        text = "Valid!"
    }else{
        if(emailSignInput.value.match(emailSignPattern)){
            text = "Valid!";
        }else{
            if(passSignInput != passSignInputRe){
                text ="password unmatched!"
            }
            else{
                text = " invaild details!"
        }
    }
    document.getElementById("pTagSign").innerHTML=text;
}

}
//     if (!userSignInput.value.match(userSignPattern)) {
//         userSignInput.setCustomValidity("Username must start with a letter.");
//         return false;
//     }

//     if (!emailSignInput.value.match(emailSignPattern)) {
//         emailSignInput.setCustomValidity("Invalid email address.");
//         return false;
//     }

//     if (passSignInput.value != passSignInputRe.value) {
//         passSignInput.setCustomValidity("Passwords do not match.");
//         passSignInputRe.setCustomValidity("Passwords do not match.");
//         return false;
//     }


//     return true;
// }
