// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// variables to store users choises

var length;
var lowerCase;
var upperCase;
var numeric;
var specCharacters;

function getPasswordOptions() {
  // loop to prompt the user untill correct data is entered
  var intake;
  do {
    intake = prompt(
      "Please, choose length of the password:\nAt least 10 characters but no more than 64"
    );
  } while (intake < 10 || intake > 64 || isNaN(intake));
  // end of loop
  length = intake;
  lowerCase = confirm("Do you want your password to contain lowercases?");
  upperCase = confirm("Do you want your password to contain uppercases?");
  numeric = confirm("Do you want your password to contain numbers?");
  specCharacters = confirm("Do you want your password to contain symbols?");
  if (
    lowerCase === false &&
    upperCase === false &&
    numeric === false &&
    specCharacters === false
  ) {
    alert("At least one character type must be selected. Please try again!");
  }
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  // ***** if user chose to use certain symbols they all are pushed in to one new arrey ArrayForPassword
  var arrayForPassword = [];
  if (lowerCase === true) {
    arrayForPassword = arrayForPassword.concat(lowerCasedCharacters);
  }
  if (upperCase === true) {
    arrayForPassword = arrayForPassword.concat(upperCasedCharacters);
  }
  if (numeric === true) {
    arrayForPassword = arrayForPassword.concat(numericCharacters);
  }
  if (specCharacters === true) {
    arrayForPassword = arrayForPassword.concat(specialCharacters);
  }
  console.log(arrayForPassword);
  //loop to get certain amount (user's choice) of random characters
  console.log(getRandom(arrayForPassword));
  console.log(length);
  var passwordArray = [];
  while (length > 0) {
    passwordArray.push(arrayForPassword[getRandom(arrayForPassword)]);
    length--;
  }
  console.log(passwordArray);
  // use join() to convert array in a string, save it in a new var= your pasword
  var generatedPassword = passwordArray.join("");
  console.log(generatedPassword);
  return generatedPassword;
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
