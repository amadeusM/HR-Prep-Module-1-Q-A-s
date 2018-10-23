//Astra Rai Daniels
//October 23, 2018
//12:40 PM
//Instructions:

/*Write a function called "convertDoubleSpaceToSingle".
-Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
Notes:
* In order to do this problem, you should be familiar with "String.split", and "Array.join".
*/
function convertDoubleSpaceToSingle(str) {
/*
-the return value for string.split() is an array.
An array of string split where the seperator occurs 
in the given string
*/
  return str.split("  ").join(' ');
}
//the join() concats each element of a string with a space between two single quote marks
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"