/*
Write a function called "getAllButLastElementOfProperty".

Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it return an empty array.
* If there is no property at the key, it should return an empty array. 

var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
*/
var obj1 = {
  thekeys: [1, 7, 4]
};
function getAllButLastElementOfProperty(obj, key) {
  var newArray = []; //array used a placeholder
  if ( obj[key] === undefined || ( obj[key].length < 1 ) || ( Array.isArray(obj[key]) === false )  ) { //if key is undefined, or length of key is less than one, or key is not an array...
    return newArray; //return empty array
  }
  for ( var i = 0; i < obj[key].length-1; i++ ) { //iterate through array, except last object, array.length-1
    newArray.push(obj[key][i]); //push each element to newArray placeholder, use bracket notation
  }
  return newArray;
}
 
var output = getAllButLastElementOfProperty(obj1, 'thekeys');
console.log(output); // --> 4