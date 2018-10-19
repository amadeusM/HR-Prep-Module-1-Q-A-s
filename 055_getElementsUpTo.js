//Astra Rai Daniels
//October 18, 2018
//9:02 PM

/*
Write a function called "getElementsUpTo".

Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

Notes:
* In order to do this you should be familiar with the 'slice' method.

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
*/

//For notes on splice method, see Module 1, Exercise 54
//For this problem, remember the following about splice():
//parameter 1 = index to start at
//parameter 2, number of items to delete 

function getElementsUpTo(array, n) {
    //for array, delete two elments starting at 3rd index
  //return deleted elements
  array.splice (n, 2); 
  //if line 4 of code above code is written:
  //return array.splice(n,2), the output is ["d", "e"]
  //
  return array;
  //failed attempt, fam: first to return array.splice(n,1), returns ["d"]
}
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']