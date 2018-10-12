/*
Write a function called "removeFromFront".

Given an array, "removeFromFront" returns the given array with its first element removed.

Notes:
* You should be familiar with the method 'shift'.

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
*/
//Use the shift method to remove the first element of the array
//The shift() method removes the first element from an array and 
//returns that removed element. This method changes the length of the array.

function removeFromFront(arr) {
    arr.shift();
    return arr;
}
var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]

//More Notes
/*I first attempted to slove the exercise as follows:
function removeFromFront(arr){
  return array.shift();
}
//this returns 1

*/