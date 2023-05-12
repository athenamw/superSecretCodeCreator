// Assignment Code
var generateBtn = document.querySelector("#generate");
var pswdLength= prompt("How many characters would you like your password to be?");
console.log (pswdLength);
var lowercase= prompt("Do you want to include lowercase letters?");
console.log(lowercase);
var uppercase= prompt("Do you want to include uppercase letters?");
console.log(uppercase);
var special= prompt("Do you want to include special characters?");
console.log(special);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
