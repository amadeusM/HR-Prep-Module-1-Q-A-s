//Astra Rai Daniels 
//October 18, 2018
//10:17 PM

/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
*/

function getAllElementsButLast(array) {
//return array.pop();//last element of array deleted
//pop method will return element deleted  
array.pop();
return array;//remaining elements//[1,2,3]  

}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]