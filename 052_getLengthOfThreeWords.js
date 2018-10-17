//Astra Rai Daniels 
//October 17, 2018
//11:47 Pm



//Instructions:

/*
Write a function called "getLengthOfThreeWords".
Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
*/

//Use length property. Similar to Module i Exercises 10, 11

function getLengthOfThreeWords(word1, word2, word3) {
  return (word1.length + word2.length + word3.length);
}
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);