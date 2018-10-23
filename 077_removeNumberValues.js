//Astra Rai Daniels
//Octoboer 22, 2018
//10:16 PM

//Instructions:

/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

//My Thoughts and Notes:

//The typeof operator returns a string indicating the type of the unevaluated operand.

//Exampels:
//typeof 37 === 'number';
//typeof 3.14 === 'number';
//typeof(42) === 'number';

//delete operator:
/*The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
*/
//String equals comparison:
//=== provides Strict Equality Comparison ("strict equality", "identity", "triple equals")

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

function removeNumberValues(obj) {
  for(var prop in obj){//loop through object properties
    if (typeof obj[prop] ==="number"){//check ifif the type of for a prop is "number"
      delete obj[prop];//use delete operator to remove proetry of object
    }
  }
}
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

//Random exercise:
/*
var obj = {
  a: 2,
  b: 'remaining',
  1: 'astrarai'
};

-Note that there is a key name of 1, this 1 number will not be removed 
in the code above
-This is because obj[prop], targets the propetry value not the key name,
if that makes sense.

*/