// Assignment code here
var specialCharacters = [
  '[', '`', '!', '@', '#', '$', '%',
  '^', '&', '*', '(', ')', '_', '+',
  '-', '=', '[', ']', '{', '}', ';',
  "'", ':', '"', '\\', '|', ',', '.',
  '<', '>', '/', '?', '~', ']', '/'
]
var numeric = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randomArrayElement (array) {
  var index = Math.floor (Math.random() * array.length)
  var element = array [index]
  return element
}
// for (var i = 0; i < numeric.length; i = i +1) {
//   console.log (randomArrayElement(numeric))
// }

function generatePassword() {
  var length = Number(prompt("lenght of the password"))
  console.log(length)
  if (length < 8 || length > 128 || !length ) {
    alert("enter number greater than 8 and less than 128")
    return;
  }
  var isLowercase = confirm("Do you want lower case characters in your password?")
  var isUppercase = confirm("Do you want uppercase case characters in your password?")
  var isNumber = confirm("Do you want numbers in your password?")
  var isSpecial = confirm("Do you want special characters in your password?")
  console.log(lowercase)
  if (isLowercase === false && isUppercase === false && isNumber === false && isSpecial === false) {
    alert("You must select at least one")
    return;
  }
  var text = ""
  for (var i = 0; i < length; i = i +1) {
    
    if (isLowercase === true) {
      text = text + randomArrayElement (lowercase)
    } 
    if (isUppercase === true) {
      text += randomArrayElement (uppercase)
    } 
    if (isNumber === true) {
      text += randomArrayElement (numeric)
    } 
    if (isSpecial === true) {
      text += randomArrayElement (specialCharacters)
    }
  }

  return text.slice(0,length)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
