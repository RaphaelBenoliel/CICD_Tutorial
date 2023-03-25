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
        emailText.innerHTML = "Your Email Address is Valid";
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
		passText.innerHTML = "Your Password is Valid"; 
        return true;
	}    
}