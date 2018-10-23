//Astra Rai Daniels
//October 23, 2018
//10:02 PM
//Instructions:
/*
Write a function called "removeArrayValues".
Given an object, "removeArrayValues" removes any properties whose values are arrays.
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
*/
//The Array.isArray() method determines whether the passed value is an Array.
//Syntax: Array.isArray(value)
//Exammples:
//// all following calls return true
//Array.isArray([]);
//Array.isArray([1]);
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
};


function removeArrayValues(obj) {
  for (var key in obj) {  // iterate thru object
    if (Array.isArray(obj[key])) {  // if object's property is an array...
      delete obj[key];  // remove that property from the object
    }
  }
}

removeArrayValues(obj);
console.log(obj);