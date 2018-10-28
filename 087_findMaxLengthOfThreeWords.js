//Astra Rai Daniels 
//October 27, 2018
//9:37 PM

//Instructions:

/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

//Notes:
/*
-The static function function Math.max() returns the highest-valued 
 number passed into it
 -Syntax Math.max(value1, value2, value3)
-the length property sets or returns the number of element in an array or string

*/
function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Math.max(word1.length, word2.length, word3.length);  
}

var output = findMaxLengthOfThreeWords('a','be','see');
console.log(output);