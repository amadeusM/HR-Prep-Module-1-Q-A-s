//Astra Rai Daniels
//October 16, 2018
//9:31 PM

//Instructions:

/*
Write a function called "computeAreaOfACircle".
Given the radius of a circle, "computeAreaOfACircle" returns its area.
var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
*/

//My Thought Process:
//Formulate to find area of Circle, Area = 3.14 * r^2
//Use Math.PI,The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:
//Use Math.pow() to square the radius, the radius being the base and the value, number 2 being the exponent
//The Math.pow() function returns the base to the exponent power, that is, baseexponent.
  

function computeAreaOfACircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
var output = computeAreaOfACircle(4);
console.log(output);