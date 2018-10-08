//Astra Rai Daniels 
//October 8, 2018
//12:12 PM

//Instructions
/*
Write a function called "isEqualTo".
Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
var output = isEqualTo(11, 10);
console.log(output); // --> false
*/

//My Thought Process

/*Within function isEqual() use an if/else statement that returns a boolean value, true or false, based on cmparison of two numbers, num1 and num 2, use equality operator*/

function isEqualTo(num1, num2) {
  if(num1 == num2){
    return true;
  } else {
    return false;
  }
}

var output = isEqualTo(11,10);
console.log(output);