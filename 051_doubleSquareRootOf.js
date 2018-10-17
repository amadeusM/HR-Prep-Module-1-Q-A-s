//Astra Rai Daniels
//October 16, 2018
//10:20 PM


//Instructions:

/*
Write a function called "doubleSquareRootOf".
Given a number, "doubleSquareRootOf" returns double its square root.
var output = doubleSquareRootOf(121);
console.log(output); // --> 22
*/

//My Thought Process:

/*The Math.sqrt() function in JavaScript is used to square root of the number passed as parameter to the function. Math.sqrt(value) Parameters : The number whose square root is to be calculated. Returns : Square root of the number passed as parameter. passed as parameter.*/




function doubleSquareRootOf(num) {
  return Math.sqrt(num) * 2;  
}
var output = doubleSquareRootOf(121);
console.log(output);