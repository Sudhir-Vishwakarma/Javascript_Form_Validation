
const firstnameError = document.getElementById("error-firstname");
const lastnameError = document.getElementById("error-lastname");
const emailError = document.getElementById("error-email");
const passwordError = document.getElementById("error-password");
const cpasswordError = document.getElementById("error-confirm-password");
const contactError = document.getElementById("error-contact");

const isValidEmail = (parameter) =>{
    const val = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return val.test(String(parameter).toLowerCase());
}

// Validation //

const submit = document.getElementById("btn-account");
    submit.addEventListener('click', function(e){
        e.preventDefault();

        // Firstname validate //
        const firstname = document.getElementById("input-firstname");
        if(firstname.value.length == ""){
            firstnameError.innerHTML = "Firstname is Required";
        } else if(firstname.value.length < 2){
            firstnameError.innerHTML = "Firstname too Short";
        } else {
            firstnameError.innerHTML = "";
        }

        // Lastname Validate //
        const lastname = document.getElementById("input-lastname");
        if(lastname.value.length == ""){
            lastnameError.innerHTML = "Lastname is Required";
        } else if(lastname.value.length < 2){
            lastnameError.innerHTML = "Lastname too Short";
        } else {
            lastnameError.innerHTML = "";
        }

        // E-mail Validate //
        const email = document.getElementById("input-email");
        if(email.value == "" ){
            emailError.innerHTML = "Email is Required";
        } else if(!isValidEmail(email.value)){
            emailError.innerHTML = "Enter Valid Email";
        } else {
            emailError.innerHTML = "";
        }

        // Password Validate //
        const password = document.getElementById("input-password");
        if(password.value.length == ""){
            passwordError.innerHTML = "Password is Required";
        } else if(password.value.length < 5){
            passwordError.innerHTML = "Need Strong Password";
        } else {
            passwordError.innerHTML = "";
        }

        // Confirm Password Validate //
        const cPassword = document.getElementById("input-confirm-password");
        if(cPassword.value.length == ""){
            cpasswordError.innerHTML = "Confirm Password Required";
        } else if(cPassword.value.length < 5){
            cpasswordError.innerHTML = "Need Strong Confirm Password";
        } else if(password.value.length !== cPassword.value.length){
            cpasswordError.innerHTML = "Confirm Password Doesn't Match";
        } else {
            cpasswordError.innerHTML = "";
        }

        // Contact Validate //
        const contact = document.getElementById("input-contact");
        if(contact.value.length == ""){
            contactError.innerHTML = "Phone Number is Required";
        } else if(contact.value.length < 10 || contact.value.length > 10){
            contactError.innerHTML = "Phone Number must contain 10 Digits";
        } else {
            contactError.innerHTML = "";
        }
    })