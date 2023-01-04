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
// Function to prompt user for password options

function getPasswordOptions() {
  length = prompt(
    "Please, choose length of password:\nAt least 10 characters but no more than 64"
  );
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
}
// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return randomElement;
}
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  console.log(length);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specCharacters);
  // need to check which arreys will be used by users choise F/T
  // if trure that arrey will be pushed in to new arreyForPassword
  // if there any other arrays that meets T they will be pushed to arreyForPassword
  // make one array useing concat
  // loop over take random characters using getRandom function
  // save them char in new var[]
  // use join() to convert array in a string, save it in a new var= your pasword
  return "your password";
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
