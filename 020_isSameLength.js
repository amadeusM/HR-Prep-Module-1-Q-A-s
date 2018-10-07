/*
Write a function called "isSameLength".
Given two words, "isSameLength" returns whether the given words have the same length.
var output = isSameLength('words', 'super');
console.log(output); // --> true
*/

//My Thought Process:
//Write a function that compares length vaules of two strings
//Use the string.length property to determine number of characters in each string
//Use strict comparision operator to check if strings are the same length
//Use if/else statement within function isSameLength(), that returns a boolean vaule true if strings are the same length, false otherwise


function isSameLength(word1, word2) {
  
  if(word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

var output = isSameLength('car','bar');
console.log(output);