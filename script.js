// Global Variables
let passLength = 8;
let choiceArr = [];

// Arrays for special characters, lower/uppercase characters and numbers
let specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '_', '-', '=', '+', '?', '/', '<', '>', '~', '|', '.'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Step 1
let generateBtn = document.querySelector("#generate");

// Step 2
generateBtn.addEventListener("click", writePassword);

// Step 3
function writePassword() {
  // Calls getPrompts
  let correctChoicePrompt = getPrompts(); // will return true or false
  let passwordText = document.querySelector("#password");
  if (correctChoicePrompt) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } else { 
    passwordText.value = "";
  }
}

// Step 4
function getPrompts() {
  // resets choice array
  choiceArr = [];
  
  // password length
  passLength = parseInt(prompt("How long would you like your new password to be? (type 8 - 128)"));
    if(isNaN(passLength) || passLength < 8 || passLength > 128 ) {
      alert("Character length must be between 8 - 128 digits. Please try again and type out the number, do NOT spell it. (Ex: 12 NOT 'twelve')");
      return false;
    }
    // Lowercase selection
    if (confirm("Add lowercase letters in the password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    // Uppercase selection
    if (confirm("Add uppercase letters in the password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    // Special characters selection
    if (confirm("Add special characters in the password? (Ex: #, %, *, @)")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    // Numbers selection
    if (confirm("Add numbers in the password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}

// Step 5
function generatePassword() {
  
  let password = "";
  for(let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * choiceArr.length);  
    password = password + choiceArr[randomIndex];
  }
  // display generated password
  return password;
}