/* 
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
*/

function computeSumOfAllElements(arr) {
//placeholder that will add elements to the array to be summed later 
  var newNum = 0;
  //iterate through the array
  
 for(var i in arr){
   //for the placehld, newNum, starting a 0, elements from the array are added to the placeholder
   newNum = newNum + arr[i];
    
  }
  //return the sum of the elements in the array
  return newNum;
  
}

var output = computeSumOfAllElements([1,2,3]);
console.log(output);