// Assignment code here

// Array with all the symbols
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var choices = []
var finalPass = ""

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

function generatePassword() {
// prompts for numbers, lower/upper case, special
var passwordlength = prompt("Pick a password length between 8-128 characters.") 
console.log (passwordlength);
//detrmine length of password
if (passwordlength <= 7) {
  alert("Please select length between 8-128 characters.");

  return generatePassword();

}else if (passwordlength >= 129) {
  alert("Please select length between 8-128 characters.");
  
  return generatePassword();
}

var passLower = confirm("Select ok for lowercase, characters in your password or cancel for none.")
console.log (passLower);
// detrmine if the user wants lowercase characters
if (passLower) {
  choices = lowercase.concat(choices);
  console.log (choices);
console.log ("lowercase picked.");
}


var passUpper = confirm("Select ok for uppercase, characters in your password or cancel for none.")
console.log (passUpper);
// detrmine if the user wants uppercase characters
if (passUpper) {
  choices = uppercase.concat(choices);
  console.log (choices);
  console.log ("uppercase picked.")
}

var passSymbols = confirm("Select ok for symbols in your password or cancel for none.")
console.log (passSymbols);
// detrmine if the user wants symbols
if (passSymbols) {
  choices = symbols.concat(choices);
  console.log (choices);
  console.log ("symbols picked.")
}

var passNumbers = confirm("Select ok for numbers in your password or cancel for none.")
console.log (passNumbers);
// detrmine if the user wants numbers
if (passNumbers) {
  choices = numbers.concat(choices);
  console.log (choices);
  console.log ("numbers picked.")
}

var finalchoices = choices.join("");
for (var i = 0; i < passwordlength; i++) {

  finalPass += finalchoices.charAt(Math.floor(Math.random() * finalchoices.length));
  console.log (finalPass);
}

return finalPass;
  
} 