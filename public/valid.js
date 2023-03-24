/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
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