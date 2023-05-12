// Assignment Code
var generateBtn = document.querySelector("#generate");
var pswdLength= prompt("How many characters would you like your password to be?");
console.log (pswdLength);
var lowercase= prompt("Do you want to include lowercase letters?");
console.log(lowercase);
var uppercase= prompt("Do you want to include uppercase letters?");
console.log(uppercase);
var numbers= prompt("Do you want to include numbers?");
console.log(numbers);
var special= prompt("Do you want to include special characters?");
console.log(special);
var smallLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
