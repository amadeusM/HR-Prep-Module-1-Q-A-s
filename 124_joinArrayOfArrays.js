/*
Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

You should be familiar with the "concat" method for this problem.

Notes:

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.





*/
function joinArrayOfArrays(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
}


var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']