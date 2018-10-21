//Astra Rai Daniels
//October 19, 2018
//6:50 PM

//Instructions:
/*
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
*/

//Note to self, solve problem one step at a time
/*
-Use if to specify a block of code o be executed, if a specified condition is true
-Use else to specify a block of code to be executed, in the same condition is false
-Use else if, to specify a new condition to test, if first condition is false
*/

function isEitherEvenOrAreBoth7(num1, num2) {
  if(num1 %2===0 || num2 %2===0){
    return true;
  }else if(num1===7 && num2=== 7){
    return true;
  }else{
    return false;
  }
}
var output = isEitherEvenOrAreBoth7(7,2);
console.log(output);