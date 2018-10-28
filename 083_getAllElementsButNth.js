//Astra Rai Daniels 
//October 27, 2018
//6:42 PM

//Instructions:

/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n) {
  array.splice(n,1);
  //starting at the first index of array, select the element
  //element selected and it is deleted
  //
  return array;
}
var output = getAllElementsButNth(['a', 'b', 'c','e', 'f'], 2);
console.log(output); // --> ['a', 'c']