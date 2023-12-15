// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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



// Function to prompt user for password options
function generatePassword() {
  var numberValue = parseInt(document.getElementById('characterAmountNumber').value, 10);

  // Validate the input for password length
  if (isNaN(numberValue) || numberValue < 8 || numberValue > 128) {
      alert("Please enter a number between 8 and 128.");
      return ""; // Exit the function or handle this scenario appropriately
  }

    // Confirm which character sets to use by checking which tick box the users choose
  var includeSpecialCharacters = document.getElementById('includeSpecialCharacters').checked;
  var includeNumericCharacters = document.getElementById('includeNumericCharacters').checked;
  var includeLowercase = document.getElementById('includeLowercase').checked;
  var includeUppercase = document.getElementById('includeUppercase').checked;
}

//get random elements from arrays
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//generate password based on user input
function generatePassword() {
  var numberValue = document.getElementById('characterAmountNumber').value;
  var includeSpecialCharacters = document.getElementById('includeSpecialCharacters').checked;
  var includeNumericCharacters = document.getElementById('includeNumericCharacters').checked;
  var includeLowercase = document.getElementById('includeLowercase').checked;
  var includeUppercase = document.getElementById('includeUppercase').checked;

  let charOptions = [];
  if (includeSpecialCharacters) {
      charOptions = charOptions.concat(specialCharacters);
  }
  if (includeNumericCharacters) {
      charOptions = charOptions.concat(numericCharacters);
  }
  if (includeLowercase) {
      charOptions = charOptions.concat(lowerCasedCharacters);
  }
  if (includeUppercase) {
      charOptions = charOptions.concat(upperCasedCharacters);
  }

  let password = '';
  for (let i = 0; i < numberValue; i++) {
      password += getRandom(charOptions);
  }
  return password;
}

// Add event listener to form submit

function setUpFormListener() {
  document.getElementById('passwordGeneratorForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const password = generatePassword();
      document.getElementById('password').value = password;
  });
}

// Call the function to set up the form listener
setUpFormListener();

