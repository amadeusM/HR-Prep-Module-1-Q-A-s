/*
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5
*/

function getStringLength(str) {
  var charCount = 0;  // placeholder number (start with 0), because the start is at beginning index of string
  for (var i in str) {  // iterate through the string
    charCount++;  // add 1 to placeholder number per loop
  }
  return charCount;
}

var output = getStringLength('hello');
console.log(output); // --> 5