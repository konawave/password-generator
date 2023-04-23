// Assignment Code
    
  // blank variable for the password generation
  var validAnswers = []; // An array with all valid answers, potentially has to be separate arrays for each category
 
  var generateBtn = document.querySelector("#generate");
  // Write password to the #password input

  var validAnswers = []
  var password = "";
  var validUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var validLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]
  var validSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var validNumbers = ["0", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9"];
  var chosenLength = 0;
  
  function generatePassword() {
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want special characters?");
    var passwordLength = prompt("How long do you want your password? Pick a length between 8 and 128 characters.");
  
    if (confirmUpper == false && confirmLower == false && confirmNumbers == false && confirmSpecial == false) {
      alert("You must select at least one character type!");
      generatePassword();
   }

    if (confirmUpper == true) {
      validAnswers = validAnswers.concat(validUpper);
      password = password.concat(validUpper[Math.floor(Math.random() * validUpper.length)]);   
      }
      
      
    if (confirmLower == true) {
      validAnswers = validAnswers.concat(validLower);
      password = password.concat(validLower[Math.floor(Math.random() * validLower.length)]);    
      }
  
    if (confirmNumbers == true) {
      validAnswers = validAnswers.concat(validNumbers);
      password = password.concat(validNumbers[Math.floor(Math.random() * validNumbers.length)]);
      }
  
    if (confirmSpecial == true) {
      validAnswers = validAnswers.concat(validSpecial);
      password = password.concat(validSpecial[Math.floor(Math.random() * validSpecial.length)]);
      }

    if (parseInt(passwordLength) > 8 && parseInt(passwordLength) < 128) {
      chosenLength = parseInt(passwordLength);
    }
      else {
        alert("Please choose a valid number!");
      }

    
    for (i = password.length; i < chosenLength; i++ ) {
      password = password.concat(validAnswers[Math.floor(Math.random() * validAnswers.length)])
     }
  return password
}
  
  function writePassword() {
    var password = generatePassword(); // password equals the value returned in the generatePassword function
    var passwordText = document.querySelector("#password"); // passwordText is equal to the password text box
  
    passwordText.value = password; // makes password equal to the primitive value of passwordText.
  }
  
  // *Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); // this CALLS function writePassword

 
  