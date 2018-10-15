//Astra Rai Daniels
//October 14, 2018
//9:21 PM

//Instructions:

/*
Write a function called "square".
Given a number, "square" should return the square of the given number.
var output = square(5);
console.log(output); // --> 25
*/

//My Thoughts
//Use Math.pow()functions sqaure num
//Syntax Math.pow(base, exponent)
//base, is the base number
//exponent, the exponent used to raise the base
//return, a number representing the give base take to the power of the given exponent


function square(num) {
  return (Math.pow(num, 2));
}

var output = square(5);
console.log(output)// --> 25