//Astra Rai Daniels
//October 19, 2018
//7:39 PM

//Instructions:

/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

//Notes on for in loops:

//The for...in statement iterates over all non-Symbol, enumerable properties of an object.
//Syntax: for (variable in object) { ...}
//variable: A different property name is assigned to variable on each iteration.
//object: Object whose non-Symbol enumerable properties are iterated over.



function countCharacter(str, char) {
  var charCount = 0;  // count placeholder
  for (var i in str) {  // iterate thru string
    if (str[i] === char) {  // if character in string is equal to the argument...
      charCount++;  // add 1 to charCount
    }
  }
  return charCount;  // return placeholder
}

console.log(countCharacter('I am a hacker', 'a'));