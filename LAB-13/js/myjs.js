// Select all input elements for varification
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");

// function for form varification
function formValidation() {
  
  // checking name length
  if (name.value == "") {
    alert("Please Enter Name!!!");
    name.focus();
    return false;
  }
  // checking email
  if (email.value === "") {
    alert("Please enter E-mail!!!");
    email.focus();
    return false;
  }
  // checking password
  if (password.value === "" && !password.value.match(/^.{5,15}$/)) {
    alert("Please enter Password between 5 to 15 character!!!");
    password.focus();
    return false;
  }
  // checking phone number
  if (phoneNumber.value === "" && !phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Please enter Phone number of 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
  }
  // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  // checking language
  if (language.value === "") {
    alert("Please select your language!")
    return false;
  }
  // checking zip code
  if (zipcode.value === "" && !zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Please enter Zip code of 6 characters long number!");
    zipcode.focus();
    return false;
  }
  return true;
}