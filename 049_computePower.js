//Astra Rai Daniels
//October 16, 2018
//10:02 PM

//Instructions:

/*
Write a function called "computePower".
Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 
var output = computePower(2, 3);
console.log(output); // --> 8
*/
//My Thoughts:

//The Math.pow() function returns the base to the exponent power, that is, baseexponent.
//Syntax: Math.pow(base, exponent)

function computePower(num, exponent) {
  return Math.pow(num, exponent);
}
var output = computePower(2, 3);
console.log(output); // --> 8