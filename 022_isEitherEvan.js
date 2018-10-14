//Astra Rai Daniels 
//October 13, 2018
//8:25 PM

//Instructios:
/*
Write a function called "isEitherEven".
Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
var output = isEitherEven(1, 4);
console.log(output); // --> true
*/

//My Thoughts and Notes:

//the remainder (%) operator returns the remainder left when one operand is divided by a second operand. 
//division, result is quotient, the value of remainder is its modulus
//If a number has a remainder of zero, number is even
//An even # is any integer (never a fraction) that can be divided exactly by two
//Write a function that returns a boolean value, true of false, based on if number is even or odd, use if/else statement within function
//use OR, ||, operator within if else sttaemnt to return ta boolean value


function isEitherEven(num1, num2) {
  if( num1 %2 === 0 || num2 % 2===0 ){
    return true;
  } else {
    return false;
  }
}

var output = isEitherEven(1,4);
console.log(output);