//Astra Rai Daniels 
//October 19, 2019
//7:16 PM

//Instructions:

/*
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:
* You should be familiar with the 'slice' method.

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
*/
/*
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
*/

//My Thoughts:
//Not sure how to use slice() to solve this exercise
/*The shift() method removes the first element from an array and returns that removed element. This method changes the length of the arraysed the shift() method
*/

function removeFromFrontOfNew(arr) {

 arr.shift();
 return arr;
}

var output = removeFromFrontOfNew([1,2,3]);
console.log(output); // --> [2, 3]