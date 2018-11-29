/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/

var obj = {
  key: [1, 7, 4]
};

function getLargestElementAtProperty(obj, key) {
 
    var array = obj[key];
  if(array === null || !Array.isArray(array) || array.length === 0) {
    return undefined;
  } else {
  //sort rlrments of array in asending order  
  var sortedArray = array.sort(function(a, b){return a - b});
  //return last element  element of array, array at index 0  
  return sortedArray[array.length-1];
  }
}

var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

/*
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

*/