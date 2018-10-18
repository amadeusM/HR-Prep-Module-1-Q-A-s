//Astra Rai
//October 17, 2018
//8:20 PM

//Instructions:

/*
Write a function called "removeFromBack".

Given an array, "removeFromBack" returns the given array with its last element removed.

Notes:
* You should be familiar with the method 'pop'.

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
*/

//My Thought Process:
//Use pop method
/*The pop() method removes the last element from an array and returns that element. This method changes the length of the array.*/

function removeFromBack(arr) {
  arr.pop();//removes element at end of array arr
  return arr;//returns new array
}
var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]