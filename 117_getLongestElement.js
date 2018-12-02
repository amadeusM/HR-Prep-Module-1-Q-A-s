/* 
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, tt should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
*/ 

function getLongestElement(arr) {
var longest = arr[0];
  if(arr.length<1){
    return '';
  }
  for(var i = 0; i<arr.length; i ++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }
  }
    return longest;

}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output);