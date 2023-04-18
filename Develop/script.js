// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var pwlength = 0

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// As a user, I need a secure password generator that takes into account criteria such as characters, uppercase, lowercase, and numbers.
  // Variables/Objects: 
    // blank variable for the password generation
    // boolean for PLAY
    // boolean for uppercase
    // boolean for lowercase
    // boolean for numbers
    // boolean for special characters
    // blank variable for length
    // An array with all valid answers

// A function that:
  // Asks the user if they want to play [CONFIRM]
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

