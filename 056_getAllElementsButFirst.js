//Astra Rai Daniels
//October 18, 2018
//9:38 PM

//Instructions:

/*
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
*/

//My Thoughts/Notes:
//See notes from Module 1 | Exercises 054, 055


function getAllElementsButFirst(array) {
  //return array.splice(0,1);//returns [1], the elment selected and deleted
  array.splice(0,1)//start at 0 index, delete element at 0 index 
  return array;
}
var input = [1,2,3,4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]