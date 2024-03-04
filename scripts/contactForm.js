const field1 = document.querySelector("#first-name");
const field2 = document.querySelector("#last-name");
const field3 = document.querySelector("#e_mail");
const field4 = document.querySelector("#confirm");
const field5 = document.querySelector("#phone-number");
const field6 = document.querySelector("#address-input");
const field7 = document.querySelector("#City");
const field8 = document.querySelector("#postal-code");
const form = document.querySelector(".form");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error4 = document.querySelector("#error4");
const error5 = document.querySelector("#error5");
const error6 = document.querySelector("#error6");
const error7 = document.querySelector("#error7");
const error8 = document.querySelector("#error8");
const field = [field1, field2, field3, field4, field5, field6, field7, field8];
const error = [error1, error2, error3, error4, error5, error6, error7, error8];
let cod1 = false;
let cod2 = false;
let cod3 = false;
let cod4 = false;
let cod5 = false;
let cod6 = false;
let cod7 = false;
let cod8 = false;

const codition = [cod1, cod2, cod3, cod4, cod5, cod6, cod7, cod8];
// this function o input validate the firstName input  with regex an if it is valid make the border green also make the first letter capital else if it is not valid make the border red and shows a message to user
function firtsNameValidation() {
    const firstNameRegex = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/;
    if (firstNameRegex.test(field1.value)) {
        field1.style.borderColor = "green";
        error1.style.display = "none";
        field1.value = field1.value.charAt(0).toUpperCase() + field1.value.slice(1);
        console.log(field1.value);
        cod1 = true;
        console.log(cod1);
    } else {
        field1.style.borderColor = "red";
        error1.innerText = "Invalid";
        // error1.style.background = "red";
        error1.style.display = "block";
        cod1 = false;
    }
}
// this function o input validate the lastName input  with regex an if it is valid make the border green also make the first letter capital else if it is not valid make the border red and shows a message to user
function lastNameValidation() {
    const lastNameRegex = /^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/;
    if (lastNameRegex.test(field2.value)) {
        field2.style.borderColor = "green";
        error2.style.display = "none";
        field2.value = field2.value.charAt(0).toUpperCase() + field2.value.slice(1);
        console.log(field2.value);
        cod2 = true;
        console.log(cod2);
    } else {
        field2.style.borderColor = "red";
        error2.innerText = "Invalid";
        error2.style.background = "red";
        error2.style.display = "block";
        cod2 = false;
    }
}
// this function o input validate the email input  with regex an if it is valid make the border green  else if it is not valid make the border red and shows a message to user
function emailValidation() {
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (emailRegex.test(field3.value)) {
        field3.style.borderColor = "green";
        error3.style.display = "none";
        console.log(field3.value);
        cod3 = true;
        console.log(cod3);
    } else {
        field3.style.borderColor = "red";
        error3.innerText = "Invalid { Email address it will be like example@..mail.com }";
        error3.style.background = "red";
        error3.style.display = "block";
        cod3 = false;
    }
}
// checks if the confirm value itis identical with email value
function confirmValidation() {
    if (field4.value === field3.value) {
        field4.style.borderColor = "green";
        error4.style.display = "none";
        console.log(field4.value);
        cod4 = true;
        console.log(cod4);
    } else {
        field4.style.borderColor = "red";
        error4.innerText = "Invalid { Confirm value it is Not identical with  E-mail value }";
        error4.style.background = "red";
        error4.style.display = "block";
        cod4 = false;
    }
}
// this function o input validate the phone input  with regex an if it is valid make the border green  else if it is not valid make the border red and shows a message to user
function phoneValidation() {
    const phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(field5.value)) {
        field5.style.borderColor = "green";
        error5.style.display = "none";
        console.log(field5.value);
        cod5 = true;
        console.log(cod5);
    } else {
        field5.style.borderColor = "red";
        error5.innerText = "Invalid {Phone value Must be a 10 digit number}";
        error5.style.background = "red";
        error5.style.display = "block";
        cod5 = false;
    }
}
// this function o input validate the firstName input  with regex an if it is valid make the border green also make the first letter capital else if it is not valid make the border red and shows a message to user
function cityCapitalized() {
    field7.value = field7.value.charAt(0).toUpperCase() + field7.value.slice(1);
    const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (cityRegex.test(field7.value)) {
        field7.style.borderColor = "green";
        error7.style.display = "none";
        console.log(field7.value);
        cod7 = true;
        console.log(cod7);
    } else {
        field7.style.borderColor = "red";
        error7.innerText = "Invalid {Please check your City value}";
        error7.style.background = "red";
        error7.style.display = "block";
        cod7 = false;
    }
}
// this function o input validate the phone input  with regex an if it is valid make the border green  else if it is not valid make the border red and shows a message to user
function postalValidation() {
    const postalCodeRegex = /^\d{5}$/;
    if (postalCodeRegex.test(field8.value)) {
        field8.style.borderColor = "green";
        error8.style.display = "none";
        console.log(field8.value);
        cod8 = true;
        console.log(cod8);
    } else {
        field8.style.borderColor = "red";
        error8.innerText = "Invalid {Please check your Postal code  value must be a 5digit number}";
        error8.style.background = "red";
        error8.style.display = "block";
        cod8 = false;
    }
}
// this function check onle if the field is empty
function addressValidation() {
    if (field6.value.length == 0) {
        field6.style.borderColor = "red";
        error6.innerText = "The field is empty";
        error6.style.background = "red";
        error6.style.display = "block";
        cod6 = false;
    } else {
        field6.style.borderColor = "green";
        error6.style.display = "none";
        cod6 = true;
        console.log(cod6);
    }
}
// When SUBMIT EVENT happens on form ELEMENT call handleSubmit
form.addEventListener("submit", handleSubmit);

// this fuction first check all the fields if there is an empty box and the display error message on th empty field
function handleSubmit(event) {
    event.preventDefault(); // Stop prevent form submission event (HTML)
    console.log(field.length);
    for (let i = 0; i < field.length; i++) {
        if (field[i].value.length == 0  ) {
            field[i].style.borderColor = "red";
            error[i].innerText = "The field is empty";
            // error[i].style.background = "red";
            error[i].style.display = "block";
            codition[i] = false;
            console.log(codition[i]);
        } else {
            field[i].style.borderColor = "green";
            error[i].style.display = "none";
            codition[i] = true;
        }
    }
    // the check the codition of the inputs if alla it ok dispay a welll done message if else drive the use back to check the input again
    const noteArea = document.querySelector("#note");
    if (cod1  && cod2  && cod3  && cod4  && cod5  && cod6  && cod7  && cod8 ) {
        noteArea.innerText = "WELL DONE YOUR FORM IS READY";
        noteArea.style.color = "green";
    } else {
        noteArea.innerText = "CHECK YOUR INPUTS AGAIN";
        noteArea.style.color = "red";
    }
}