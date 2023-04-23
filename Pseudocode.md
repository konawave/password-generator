<!-- !GIVEN I need a new, secure password

!WHEN I click the button to generate a password
!THEN I am presented with a series of prompts for password criteria

!WHEN prompted for password criteria
!THEN I select which criteria to include in the password

!WHEN prompted for the length of the password
!THEN I choose a length of at least 8 characters and no more than 128 characters

!WHEN asked for character types to include in the password
!THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

!WHEN I answer each prompt
!THEN my input should be validated and at least one character type should be selected

!WHEN all prompts are answered
!THEN a password is generated that matches the selected criteria

!WHEN the password is generated
!THEN the password is either displayed in an alert or written to the page

!Need a variable to store the password as it's being built
!Need to ask the user how long the password should be
    !prompt()
    !^ needs to be stored in a variable
!Confirm whether to use uppercase letters, lowercase letters, numbers, and/or special characters -->
<!-- !Need to check whether the user selected a valid password length
!Need to check whether the user selected at least one character type
    !If not, prompt them again OR alert that the input wasn't valid

!Need to make sure at least one character is chosen from each character type
    !When the user selects a character type, generate a random character from that set and concatenate it to the unfinished password
        !Generate a random character: array[Math.floor(Math.random() * array.length)]
        !Once we have the actual character, concatenate it to the variable that's storing out
!Once mega-array established:
    !For loop:
        !Generate a random character: array[Math.floor(Math.random() * megaArray.length)]
        !Once we have the actual character, concatenate it to the variable that's storing out
       ! Start i =unfinishedPassword.length
        !Go until i < passwordLength
    !return unfinished Password --> -->