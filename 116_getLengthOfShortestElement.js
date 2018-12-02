/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  // your code here
  var shortest = arr[0];
  //if passed array, has a length less that zero, return 0, as instructions state
  if ( arr.length < 1 ) {
    return 0;
  }
  //for arrays with lenght greater than zero, loop through array
  
  for ( var i = 0; i < arr.length; i++ ) {
  //if the element in the array is   
    if ( arr[i].length < shortest.length ) {
      
      //? this line of codeis confusing?? I need a nap
      shortest = arr[i];
    }
  }
  
  return shortest.length;
}

var output = getLengthOfShortestElement(['one','two','three']);
console.log(output);