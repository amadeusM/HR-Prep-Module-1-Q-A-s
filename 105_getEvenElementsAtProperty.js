/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {  // alternate answer (loops)
 var newArray = [];  // empty array to push odd numbers in
  if (!Array.isArray(obj[key])) {  //if object does not have an array, return an empty array
     return [];
   }
   for (var prop in obj[key]) {  // for in loop iterates through an array in object's key
     if (obj[key][prop] % 2 == 0) {  // check of elements in the obj with key are even, return in newArray
       newArray.push(obj[key][prop]);  // use the push mehtod ot push that number to the empty array, named newArray
     }
   }
   return newArray;
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]