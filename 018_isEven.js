//Astra Rai Daniels 
//October 7, 2018
//2:52 PM, Time Zone (GMT-7)

//Instructions:
/*
Write a function called "isEven".
Given a number, "isEven" returns whether it is even.
var output = isEven(11);
console.log(output); // --> false
*/

//My Thought Process:

//the remainder (%) operator returns the remainder left when one operand is divided by a second operand. 
//division, result is quotient, the value of remainder is its modulus
//If a number has a remainder of zero, number is even
//An even # is any integer (never a fraction) that can be divided exactly by two
//Write a function that returns a boolean value, true of false, based on if number is even or odd, use if/else statement within function


function isEven(num) {
  if (num % 2 == 0){
    return true;
  } else {
    return false;
  }
}

var output = isEven(7);
console.log(output);//-->7 
//Notes
//7%2 = 1, a remainder indicates that num isn't even