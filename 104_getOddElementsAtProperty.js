/*
Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
*/

var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {  // alternate answer (loops)
 var newArray = [];  // empty array to push odd numbers in
  if (!Array.isArray(obj[key])) {  //if object does not have an array, return an empty array
     return [];
   }
   for (var prop in obj[key]) {  // for in loop iterates through an array in object's key
     if (obj[key][prop] % 2 !== 0) {  // if element, is not even, b default it is an odd number...
       newArray.push(obj[key][prop]);  // use the push mehtod ot push that number to the empty array, named newArray
     }
   }
   return newArray;
}
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]