/*
Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

You should be familiar with the "concat" method for this problem.
*/

//Notes:

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//Syntax
//var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
//var newArray = arr.1(arr2, arr3);
//valueN
//A/rrays and/or values to concatenate into a new array. See the description below for details.

function joinThreeArrays(arr1, arr2, arr3) {
  var newArray = arr1.concat(arr2, arr3);
  return newArray;

}
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]