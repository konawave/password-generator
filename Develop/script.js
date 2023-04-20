// Assignment Code
// As a user, I need a secure password generator that takes into account criteria such as characters, uppercase, lowercase, and numbers.
  // Variables/Objects: 
    
var password ="" ;// blank variable for the password generation
var play = false;  // boolean for PLAY
var uppercase = false; // boolean for uppercase
var lowercase = false;  // boolean for lowercase
var numbers = false; // boolean for numbers
var special = false; // boolean for special characters
var pwLength = 0; // blank variable for length 
var validAnswers = []; // An array with all valid answers, potentially has to be separate arrays for each category
var validUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var validLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]
var validSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"];
var validNumbers = ["0", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9"];


var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function writePassword() {
  var password = generatePassword(); // password variable calls generatePassword function.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// *Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // this CALLS function writePassword


// [CONFIRM] If they want uppercase
  // If return true, concat validAnswers and validUpper
validAnswers = validAnswers.concat(validUpper)
validAnswers = validAnswers.concat(validLower)
console.log(validAnswers)
// [CONFIRM] If they want lowecase
// [CONFIRM] If they want special characters
// [CONFIRM] If they want numbers

// Function that:
  // Asks user if they want uppercase [CONFIRM]
  // Asks user if they want lowercase [CONFIRM]
  // Asks user if they want numbers [CONFIRM]
  // Asks user if they want special characters [CONFIRM]
  // Asks user how long they want their password (between 8 and 128 characters) [PROMPT]
  // Validate choices to ensure at least one option is a YES. 
    // If not, [ALERT] that they need to check at least one option
    // Re-runs function
  // If selection is valid;
    // function makes blank password variable equal to Math.floor((Math.random) * (array.length)), possibly a for loop to iterate through each character of the password?

