//Astra Rai Daniels 
//October 10, 2018
//11:37 PM

//Instructions:

/*Write a function called "getLastElement".
Given an array, "getLastElement" returns the last element of the given array.
Notes:
* If the given array has a length of 0, it should return 'undefined'.
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
*/

//My Thought Process and Notes:

/*In the given array [1,2,3,4,], 4 is in the 3rd index of the array. The array has four elments total, in indicies 0 - 3.

The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

array[array.length-1] reads "access the given array, with the name array. 
Then access the last elment in the given array.Return that element
*/

function getLastElement(array) {
  return array[array.length-1];
}
var output =getLastElement([1,2,3,4]);
console.log(output);