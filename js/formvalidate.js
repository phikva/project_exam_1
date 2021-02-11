//validate form DOM
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", validateForm);

//Validate Email Function
function emailValidation(email) {
  const regularEx = /\S+@\S+\.\S+/;
  return regularEx.test(email);
}

function validateForm(event) {
  event.preventDefault();
  console.log("form submitted");

  //First Name
  const firstName = document.querySelector("#first-name");
  const firstNameError = document.querySelector("#first-name-error");
  const firstNameValue = firstName.value;
  //Last Name
  const lastName = document.querySelector("#last-name");
  const lastNameError = document.querySelector("#last-name-error");
  const lastNameValue = lastName.value;
  //Email
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");
  const emailValue = email.value;

  //Message
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");
  const messageValue = message.value;

  //FirstName Check
  if (checkTextLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.color = "red";
    firstNameError.style.display = "block";
  }

  //LastName Check
  if (checkTextLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.color = "red";
    lastNameError.style.display = "block";
  }

  //Email Check
  if (checkTextLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.color = "red";
    emailError.style.display = "block";
  }
  if (emailValidation(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.color = "red";
    emailError.style.display = "block";
  }

  //Message Check
  if (checkTextLength(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.color = "red";
    messageError.style.display = "block";
  }
}

//Trim length
function checkTextLength(value) {
  const trimValue = value.trim();
  if (trimValue.length > 0) {
    return true;
  } else {
    return false;
  }
}
