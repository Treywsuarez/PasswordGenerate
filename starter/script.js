// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  userInput = {};
  // Validate password length
  while (true) {
    // Prompt for password length, ParseInt to convert into string then return as an Integer 
    var newPassword = parseInt(prompt(
      'Enter the length of the password (between 10 and 64 characters):'
    ));

    // Validate password length
    if (newPassword >= 10 && newPassword <= 64 && Number.isInteger(newPassword)) {
      userInput['length'] = newPassword;

      //Once password length is confirmed by numer, this loop breaks
      return;

      //if not, the user is asked to enter length again using numeric value
    } else {
      alert('Password must be at least 10 characters but no more than 64');
    }
  };
};

getPasswordOptions();

// Prompt for character types
var lowercase = confirm('Include lowercase characters?');
var uppercase = confirm('Include uppercase characters?');
var numeric = confirm('Include numeric characters?');
var special = confirm('Include special characters ($@%&*)?');




// Function for getting a random element from an array
function getRandom(arr) {
  // Generate a random index based on the array length
  var index = Math.floor(Math.random() * arr.length);
  // Return the element at the random index
  return arr[index];
}

var specialE = getRandom(specialCharacters);
var numericE = getRandom(numericCharacters);
var lowerc = getRandom(lowerCasedCharacters);
var upperc = getRandom(upperCasedCharacters);


// Function to generate password with user input
function generatePassword() {

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener("click", function () {
  const gpassword = generatePassword();
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);