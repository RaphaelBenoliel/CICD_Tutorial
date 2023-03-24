/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-undef 
// Validtion Code For Inputs

const { email } = document.forms.form;
const { password } = document.forms.form;
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

// eslint-disable-next-line no-unused-vars
function validated() {
    if (email.value.length < 9) {
        email.style.border = '1px solid red';
        email_error.style.display = 'block';
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = '1px solid red';
        pass_error.style.display = 'block';
        password.focus();
        return false;
    }
}
function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = '1px solid silver';
        email_error.style.display = 'none';
        return true;
    }
}
function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = '1px solid silver';
        pass_error.style.display = 'none';
        return true;
    }
}
*/
const email = document.getElementById("email");
const password = document.getElementById("password");
email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

const emailBox = document.querySelector('.emailBox');
const emailText = document.querySelector('.emailText');
const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
function validated() {
    if(!(email.value.match(emailPattern))){
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Must be a valid email address.";
        return false; 
    }
    if (!(password.value.match(passPattern))) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.innerHTML = "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.";
        return false; 
    }
}
function email_Verify(){
    if(email.value.match(emailPattern)){
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.innerHTML = "Your Email Address in Valid";
        return true; 
    }
  
}
const passBox = document.querySelector('.passBox');
const passText = document.querySelector('.passText');
const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

function pass_Verify(){
    if(password.value.match(passPattern)){
	    passBox.classList.add('valid');
		passBox.classList.remove('invalid');
		passText.innerHTML = "Your Password in Valid"; 
        return true;
	}    
}


