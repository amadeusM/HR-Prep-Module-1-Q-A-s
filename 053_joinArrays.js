//Astra Rai Daniels 
//October 11, 2018
//2:42 PM

//Instructions:

/*
Write a function called "joinArrays".
Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2". 
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
You should be familiar with the "concat" method for this problem.
*/


//My Thought Process and Notes: 
/*The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.
*/

//note code on line 25 runs successfully if written as:
//return arr1.concat(arr1.concat(arr2));
//I'm not sure if wrapping the code in () changes anything because 
//output is the same with or without them??

function joinArrays(arr1, arr2) {
   return arr1.concat(arr2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]