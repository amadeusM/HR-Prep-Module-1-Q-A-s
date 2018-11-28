/*
Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/


var arr =  ['there', 'it', 'is', 'now'];

function filterOddLengthWords(words) {
  //store the odd elements of array, passed as an argument through words parameter, if there are odd elements
  var oddArray = [];
 //iterate through elements of array 

  for (var i = 0; i < words.length; i++) {
  //if the array passed through functions, has a string length of an odd, use the push method and push those elements to addArray
    if (words[i].length % 2 === 1) {
      oddArray.push(words[i]);  
    }
  }
  return oddArray;
} 
var output = filterOddLengthWords(arr);
console.log(output); // --> ['word', 'word']

//var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
//console.log(output); // --> ['word', 'word']