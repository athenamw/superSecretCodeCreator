// Assignment Code
var generateBtn = document.querySelector("#generate");
//prompt and confirms for user input
var pswdLength= prompt("How many characters would you like your password to be?");
console.log (pswdLength);
var lowercase= confirm("Do you want to include lowercase letters?");
console.log(lowercase);
var uppercase= confirm("Do you want to include uppercase letters?");
console.log(uppercase);
var numbers= confirm("Do you want to include numbers?");
console.log(numbers);
var special= confirm("Do you want to include special characters?");
console.log(special);
//arrays
const smallLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const bigLetters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const integers=[0,1,2,3,4,5,6,7,8,9];
const symbols=["!,#,$,%,&,(,),*,+,-,.,/,:,<,=,>,?,@,^,_,`,{,|,},~,"];
var generator=[];
//function loops to generate passwords
if(lowercase === true){
  generator=generator.concat(smallLetters);
}
if(uppercase === true){
  generator=generator.concat(smallLetters, bigLetters);
}
if(numbers === true){
  generator=generator.concat(smallLetters, bigLetters,integers);
}
if(special === true){
  generator=generator.concat(smallLetters, bigLetters, integers, symbols);
}
console.log(generator);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
