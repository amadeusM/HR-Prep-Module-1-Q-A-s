/*
Write a function called "filterEvenElements".

Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
*/



function filterEvenElements(arr) {
  //create an array as a placeholder
  var elements = [];
  //for loop to interate through array, 
  for (var i = 0; i < arr.length; i++) {
    //check to see if element in array is an even number
    if (arr[i] % 2 === 0) {
      //if there are even numbered elements in array, push each element to empty elements array
      elements.push(arr[i]);
    }
  }
  //return elements array
  return elements;
}
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]