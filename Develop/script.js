// Assignment Code
    
  var passwordtext ="" ;// blank variable for the password generation
  var validAnswers = []; // An array with all valid answers, potentially has to be separate arrays for each category
 
  var generateBtn = document.querySelector("#generate");
  // Write password to the #password input
  
  let confirmUpper = confirm("Do you want uppercase letters?");
  let confirmLower = confirm("Do you want lowercase letters?");
  let confirmNumbers = confirm("Do you want numbers?");
  let confirmSpecial = confirm("Do you want special characters?");
  let passwordLength = prompt("How long do you want your password? Pick a length between 8 and 128 characters.");
  
  function generatePassword() {
    var validUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var validLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]
    var validSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"];
    var validNumbers = ["0", "1", "2", "3", "4", "5", "5", "6", "7", "8", "9"];

    if (confirmUpper = true) {
        validAnswers = validAnswers.concat(validUpper);
      }
      
    if (confirmLower = true) {
      validAnswers = validAnswers.concat(validLower);
      }
  
    if (confirmNumbers = true) {
      validAnswers = validAnswers.concat(validNumbers);
      }
  
    if (confirmSpecial = true) {
      validAnswers = validAnswers.concat(validSpecial);
      }
    var password = []
    for (i = 0; i <= passwordLength; i++) {
      var passwordtext = Math.floor(Math.random() * validAnswers.length); //Need to find a way to append
      password.push(passwordtext);
    }
      

    return password
  }
    // if ((confirmSpecial && confirmNumbers && confirmUpper && confirmLower) == false) {
    //     alert("At least one option needs to be chosen! Please try again!")
    //     generatePassword;
      // if (confirmSpecial == false && confirmUpper == false && confirmNumbers == false && confirmLower == false) {
      //   alert("Try again!")
      //   generatePassword
      // }
      // }
    // if (passwordLength >= 8 && passwordLength <= 128) {
    //   for (i = 0; i < passwordLength; i++ ) {
    //     passwordunit = Math.floor(Math.random() * validAnswers.length);
    //     passwordtext = passwordtext.append(passwordunit);
    // }
  
    //   }
    //   else {
    //     alert("Please only use numbers.");
    //     generatePassword();
    //   }
    // return
  
  
  function writePassword() {
    var password = generatePassword(); // password equals the value returned in the generatePassword function
    var passwordText = document.querySelector("#password"); // passwordText is equal to the password text box
  
    passwordText.value = password; // makes password equal to the primitive value of passwordText.
  }
  
  // *Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); // this CALLS function writePassword
  
  