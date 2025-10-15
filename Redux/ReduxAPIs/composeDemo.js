import { compose } from "redux";
function removeSpaces(string) {
  return string.split(" ").join("");
}

function repeatStrings(string) {
  return string + string;
}

function convertToUpper(string) {
  return string.toUpperCase();
}

// If we want to remove spaces from the string then repeat it and at last convert it to uppercase.
const ouputString = convertToUpper(repeatStrings(removeSpaces("abc def ghi")));
console.log(ouputString);

// we can do this same using compose() function given by redux.
const ouputStringRedux = compose(removeSpaces, repeatStrings, convertToUpper);
console.log(ouputStringRedux); // returns a new function 
console.log(ouputStringRedux("abc def ghi"));
