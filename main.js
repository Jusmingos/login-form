/*
  This is the javascript file for the login form. It handles the login logic.
*/

let name = document.querySelector(".name");
let password = document.querySelector(".password");
let error_message = document.querySelector(".error");
let submit = document.querySelector(".submit");
let display = document.querySelector(".display");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let messages = [];
  //create an array to contain the error messages
  if (name.value == '' || name.value == null) {
    //.value returns the value attribute of a text field
    messages.push("Name is required");
    //the push method pushes the new item onto the end of an array
  }
  if (password.value == '' || password.value == null) {
    messages.push("Password is required");
  } else if (password.value.length <= 6) {
    messages.push("Passwords must be longer than 6 characters!")
  }
  if (password.value.length >= 20) {
    messages.push("Passwords must be shorter than 20 characters!");
  }
  if (password.value.toLowerCase() === "password") {
    messages.push("Password cannot be password!");
  }
  if (messages.length > 0) {
    /*
      If there is some kind of error, don't send the form and
      print out the error message
    */
    error_message.innerText = messages.join("; ");
  }
  if (name.value != "" && password.value != "") {
    let a = [name.value, password.value];
    display.innerHTML = "Name: " + a[0] + "  Password: " + a[1];
  }
});

//toggle password visibility (with a checkbox)
let toggle = function() {
  //when the type is text, the password is displayed as normal text
  if (password.type === "text") {
    //when the type is password, the password is hidden
    password.type = "password";
  } else {
    password.type = "text";
  }
}
