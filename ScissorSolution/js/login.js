function validateLogInForm(){
    let emailInput = document.getElementById("emailBox").value;
    let passInput = document.getElementById("passBox").value;

    let emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}";
    let passPattern = "[a-zA-Z0-9]";
    
    if((emailInput.match(emailPattern)) && (passInput.match(passPattern))){
        text = "Valid!";

        // console.log(`email: ${emailInput}`, `password: ${passInput}`);
        // console.log(`password: ${passInput}`)
    let userInfo = {
        email : emailInput,
        password : passInput
    }
    console.log(userInfo);

    // let {email, password} = userInfo;
    // console.log(email, password);


    }else{
        text = "email or password invalid!"
    }
    document.getElementById("pTag").innerHTML = text;

}


