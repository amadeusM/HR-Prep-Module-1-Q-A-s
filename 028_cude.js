//Astra Rai Daniels 
//October 14, 2018
//9:05 PM

//Instructions:

/*
Write a function called "cube".
Given a number, "cube" returns the cube of that number.
var output = cube(3);
console.log(output); // --> 27
*/

//My Thoughts and Notes
//Use Math.pow function to return base of exponent power
//Syntax, Math.pow(base, exponent)
//Base, the base number
//Exponent, the exponent used to raise the base

function cube(num) {
  return (Math.pow(num, 3));
}

var  output = cube(3);
console.log(output);