
//Astra Rai Daniels 
//October 10, 2018
//8:58 PM

//Instructions

/*Write a function called "getNthElement".
Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
Notes:
* If the array has a length of 0, it should return 'undefined'.
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/

//My Thought Process:

/*Define Array
he Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type
*/

/*This is how to access an element in an array, array[]
//Create a functioin, with two parameters - the arrayand the element to selected within array 
//Function should return selected array element
//Select by index, for example, array[1,3,5]
//Index 0 is 1
//Index 1 is 3
//Index 2 is 5
/*Therefore, the arguments, ([1,2,3], 1), passed through the 
the parameters of function getNthElement(), returns 3
*/

function getNthElement(array, n) {
  return array[n];
}
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3