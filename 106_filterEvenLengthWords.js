/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

var arr =  ['word', 'words', 'word', 'words'];

function filterEvenLengthWords(words) {
  var evenArray = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
      evenArray.push(words[i]);
    }
  }
  return evenArray;
  
} 

var output = filterEvenLengthWords(arr);
console.log(output); // --> ['word', 'word']

//var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
//console.log(output); // --> ['word', 'word']