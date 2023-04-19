// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create a variable called generateBtn that is = to a querySelector that returns the #generate id, which is the ID given to the button.

// Function called writePassword that, when called, provides two variables: one called password that is = to generatePassword();, and a second called passwordText that is = to document.querySelector (which returns the value of anything with a password ID, the text area)

// IDK what passwordText.value = password means. 

// Element that adds an event listener to the generate button, 
