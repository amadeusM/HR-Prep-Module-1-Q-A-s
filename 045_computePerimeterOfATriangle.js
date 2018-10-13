//Astra Rai Daniels 
//October 13, 2018
//6:21 AM

//Instructions

/*
Write a function called "computePerimeterOfATriangle".
Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.
var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20
*/

//My Thoughts: Follow fourmulate to calculate Area of a triangle
//Are of Trianle: a + b + c


function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}
var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20