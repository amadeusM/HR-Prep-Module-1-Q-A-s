/*
Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
//console.log(output); // --> [4, 1, 25]
//Notes:
//ArrayisArray: 
The Array.isArray() method determines whether the passed value is an Array.

//Property Accessors:

Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

//Use Math.pow function

The Math.pow() function returns the base to the exponent power, that is, baseexponent.
Syntax: Math.pow(base, exponent)

*/
var obj = {
  key: [2, 1, 5],
};

function getSquaredElementsAtProperty(obj, key) {
  var squaredArray = [];
  //if obj passed as arguement, for paramenter obj, does not have a property with an array return an empty array
  if (!Array.isArray(obj[key])) {
    return [];
  }
//use for in loop to interate through object 
  for (var prop in obj[key]) {
//return a new array, from the results of squaring element in property of obj, obj
    squaredArray.push(Math.pow(obj[key][prop], 2));
  }
  return squaredArray;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25];