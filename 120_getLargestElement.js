/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/

function getLargestElement(arr) {
  if (arr.length<1){
    return 0;
  }  
  //this placeholder, numNum is for the first element of the array
  newNum = arr[0];
  //iterate wthrough the array
  for(let i in arr){
 
    if(arr[i] > newNum){
      newNum = arr[i];      
  }  
}

return newNum;
}


var output = getLargestElement([5,2,8,3]);
console.log(output);