//Astra Rai Daniels
//October 13, 2018
//5:56 AM

//Instructions:
/*
Write a function called "computePerimeterOfARectangle".
Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
var output = computePerimeterOfARectangle(5, 2);
console.log(output); //
*/

//My Thoughts
//Forumula for perimeter of rectange = 2(lenght +  width)

function computePerimeterOfARectangle(length, width) {
  return (length + width) * 2;
}
var output = computePerimeterOfARectangle(5,2);
console.log(output);