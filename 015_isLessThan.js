//Astra Rai Daniels 
//October 8, 2018
//11:54 AM

//Insturctions
/*
Write a function called "isLessThan".
Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
var output = isLessThan(9, 4);
console.log(output); // --> true
*/

//My Thought Process

/*Within the isLessThan function with two parameters, num1 and num2, use an if/else statement that returns a boolean value based on num2 value of num1. Use less than operator*/

function isLessThan(num1, num2) {
  if (num2 < num2){
    return true;
  } else {
    return false;
  }
}

var output = isLessThan(9,4);
console.log(output);// --> true