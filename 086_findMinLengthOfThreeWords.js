//Astra Rai Daniels
//October 27, 2018
//8:39 PM

//Instructions:

/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

//My Thoughts and Notes
/*
-The static functions Math.min() returns the lowest-valued number 
passed into it or NAN if any parameter isnot a number and 
cannot be converted to one
-Syntax Math.min(value1, value2, value3)
-The length property sets or returns the number of elements in an array or string                   
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length, word2.length, word3.length);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);