// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return "SamplePassword123";

  if (password !== null && password !== undefined) {
    // If a password is successfully generated, show it
    passwordText.value = password;
  } else {
    // If there's a problem with generating the password, show an error message
    passwordText.value = "Oops! Something went wrong while generating the password.";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
