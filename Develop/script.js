// Assignment Code
// As a user, I need a secure password generator that takes into account criteria such as characters, uppercase, lowercase, and numbers.
  // Variables/Objects: 
    
var password ="" ;// blank variable for the password generation
var pwLength = 0; // blank variable for length 
var validAnswers = []; // An array with all valid answers, potentially has to be separate arrays for each category
var validUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var validLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]
var validSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"];
var validNumbers = ["0", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

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
    // prints generated password into the text box on the webpage.
  // This function may need to be moved above letsPlay function since letsPlay calls generatePassword.
let confirmUpper = confirm("Do you want uppercase letters?");
let confirmLower = confirm("Do you want lowercase letters?");
let confirmNumbers = confirm("Do you want numbers?");
let confirmSpecial = confirm("Do you want special characters?");
let passwordLength = prompt("How long do you want your password? Pick a length between 8 and 128 characters.")

function generatePassword() {
  // confirmUpper;
  if (confirmUpper = true) {
      validAnswers = validAnswers.concat(validUpper);
    }
    
    // confirmLower;
  if (confirmLower = true) {
    validAnswers = validAnswers.concat(validLower);
    }

    // confirmNumbers;
  if (confirmNumbers = true) {
    validAnswers = validAnswers.concat(validNumbers);
    }

    // confirmSpecial;
  if (confirmSpecial = true) {
    validAnswers = validAnswers.concat(validSpecial);
    }

  // if ((confirmSpecial && confirmNumbers && confirmUpper && confirmLower) == false) {
  //     alert("At least one option needs to be chosen! Please try again!")
  //     generatePassword;
    // if (confirmSpecial == false && confirmUpper == false && confirmNumbers == false && confirmLower == false) {
    //   alert("Try again!")
    //   generatePassword
    // }
    // }
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (i = 0; i < pwLength; i++ ) {
      var password = Math.floor(Math.random() * validAnswers.length);
  }

    }
    else {
      alert("Please only use numbers.");
      generatePassword();
    }
  return password;
  }

generatePassword();

function writePassword() {
  var password = generatePassword(); // password variable calls generatePassword function.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// *Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // this CALLS function writePassword

