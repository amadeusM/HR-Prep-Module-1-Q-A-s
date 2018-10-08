//Astra Rai Daniels 
//October 8, 2018
//12:00 PM

//Instructions:
/*
Write a function called "isGreaterThan".
Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
var output = isGreaterThan(11, 10);
console.log(output); // --> false
*/

//My Thought Process:
/*Within the isGreaterThan function with two parameters, num1 and num2, use an if/else statement that returns a boolean value based on num2 value of num1, that answers if num2 is greater than num1  Use greater than operator*/

function isGreaterThan(num1, num2) {
  if(num2 > num1){
    return true;
  } else {
    return false;
  }
}
var output = isGreaterThan(11, 10);
console.log(output);// --> false