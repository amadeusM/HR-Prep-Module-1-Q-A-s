//Astra Rai Daniels 
//October 13, 2018
//6:48 AM

//Instructions

/*
Write a function called "computeTripledAreaOfARectangle".
Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24
*/


//My thoughts
//Forumla for calculating Area of Rectange
//Area = length * width
//Tripled Area = (length * width) * 3

function computeTripledAreaOfARectangle(length, width) {
  return (length * width) * 3;
}

var output = computeTripledAreaOfARectangle(2,4);
console.log(output);