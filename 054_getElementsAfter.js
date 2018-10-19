//Astra Daniels
//October 18, 2018
//7:59 PM

//Instructions:

/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/


//Notes on slice() method:

//The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

//Splice syntax: 
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

/*
-Start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.
-deleteCount Optional
An integer indicating the number of old array elements to remove.
If deleteCount is omitted, or if its value is larger than array.length - start (that is, if it is greater than the number of elements left in the array, starting at start), then all of the elements from start through the end of the array will be deleted.
-If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
item1, item2, ... Optional
-(Resource, MDN)
*/


function getElementsAfter(array, n) {
  return array.splice(n + 1);
//same as having start index pararmeter at 3rd index
//n +!, 2 indext + 1, 3rd index  
}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
/*for the given array, if the argument 2 is passed through the parameter
n 
*/
console.log(output); // --> ['d', 'e']