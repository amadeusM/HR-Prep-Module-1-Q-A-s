/*
Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.


var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
*/

var obj = {
  key: [1, 2, 4]
};
// --> 1

function getFirstElementOfProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    //The Array.isArray() method determines whether the passed value is an Array.
    return obj[key][0];
    //for object, named obj, with a array, return the first element of array
    //remember array indexes are zero-based
  } else {
    return undefined;
  }
}

var output = getFirstElementOfProperty(obj, 'key');
console.log(output);