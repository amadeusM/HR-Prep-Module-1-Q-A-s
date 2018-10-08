//Astra Rai Daniels  
//October 7, 2018
//Time: 9:19 PM

//Instructions

/*
Write a function called "isLessThan30".
Given a number, "isLessThan30" returns whether the given number is less than 30.
var output = isLessThan30(9);
console.log(output); // --> true
*/

//My Thought Process

/*Within the lessThan30(), with one parameter, num,  use if/else statement to check if arguement passed through num parameter is less than 30, use less than operator*/

function isLessThan30(num) {
  if(num < 30){
    return true;
  } else {
    return false;
  }
}

var output = isLessThan30(9);
console.log(output);