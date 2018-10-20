//Astra Rai Daniels
//October 19, 2018
//9:05 PM

//Instructions

/*
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
*/


function getAllWords(str) {
  if (str.length < 1){  // is the string's length is less than 1
    return [];//return an empty array
  }
  return str.split(' '); 
  //return str.split('');//string become an array with each word at an index
  /*Out: ["R", "a", "d", "a", "g", "a", "s", "t", " ", "t", "h", "e", " ", "B", "r", "o", "w", "n"]*/
}
var output = getAllWords('Radagast the Brown');
console.log(output);//--> ['Radagast', 'the', 'Brown']