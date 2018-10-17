//Astra Rai Daniels 
//October 16, 2018
//9:02 PM

//Instructions:

/*
Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
*/

//My Thoughts:
//Formula for circumference of circle = 2 * 3.14(pie) * radius

//The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:, use this instead of just 3.14


function computePerimeterOfACircle(radius) {
  return 2 * Math.PI * radius;
}

var output = computePerimeterOfACircle(4);
console.log(output) // --> 25.132741228728345