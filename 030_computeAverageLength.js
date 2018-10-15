//Astra Rai Daniels
//October 14, 2018
//9:36 PM


//Instructions:

/*
Write a function called "computeAverageLengthOfWords".
Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/


//My Thoughts

//Use length property to determine lenght of eeach string
//Add lenght of two strings together (don't forget to use parenthesis)

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output) // -->6