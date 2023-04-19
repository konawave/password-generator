// Assignment Code
// As a user, I need a secure password generator that takes into account criteria such as characters, uppercase, lowercase, and numbers.
  // Variables/Objects: 
    
var password ="" ;// blank variable for the password generation
var play = true;  // boolean for PLAY
var uppercase = true; // boolean for uppercase
var lowercase = true;  // boolean for lowercase
var numbers = true; // boolean for numbers
var special = true; // boolean for special characters
var pwLength = 0; // blank variable for length 
var validAnswers = []; // An array with all valid answers, potentially has to be separate arrays for each category
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

// A function that:
  // Asks the user if they want to play [CONFIRM]
// Another Function that:
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
    // prints generated password into the text box on the webpage.
  // This function may need to be moved above letsPlay function since letsPlay calls generatePassword.
let uppercase = confirm("Would you like uppercase characters?")
function generatePassword() {
  if (uppercase = true) {
    validAnswers.append("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ) }

}

function writePassword() {
  var password = generatePassword(); // password variable calls generatePassword function.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// *Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // this CALLS function writePassword



