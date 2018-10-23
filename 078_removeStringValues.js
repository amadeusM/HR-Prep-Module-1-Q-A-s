//Astra Rai Daniels
//October 23, 2018
//11:01 AM

//Instructions:

/*
Write a function called "removeStringValues".

Given a//My Thoughts and Notes:

-The typeof operator returns a string indicating the type of the unevaluated operand.
-The typeof operator is used to get the data type (returns a string) of its operand.
-There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. The following table summarizes possible values returned by the typeof operator.

//Exampels for string values:
typeof '' === 'string';
typeof 'bla' === 'string';

//delete operator:
/*The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
*/
//String equals comparison:
//=== provides Strict Equality Comparison ("strict equality", "identity", "triple equals")n object, "removeStringValues" removes any properties on the given object whose values are strings.

/*var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
*/

var obj = {
  name: 'Sam',
  age: 20
}
function removeStringValues(obj) {
  for (var prop in obj){//loop through object properties 
    if(typeof obj[prop]==="string"){//use typeof to check value of property, if vaule is a 
      //string 
      delete obj[prop];//if property value is a string, use delete operator to delete property
    }
 }
  return obj;
}
removeStringValues(obj);
console.log(obj); // { age: 20 }