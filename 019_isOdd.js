//Astra Rai Daniels 
//October 7, 2018
//5:06 PM 


//Instructions
/*
Write a function called "isOdd".
Given a number, "isOdd" returns whether the given number is odd.
var output = isOdd(9);
console.log(output); // --> true
*/

//My Thought Process

//Notes
//Defintion of odd number: an integer which is not a multiple of two. If divided by two, the result is a fraction
//One is the first odd positive number. The next four bigger #'s are 3,5,7, and 9...An integer that is not an odd numberis an even number
//The remainder operator % returns the remainder left when one operand is divided by a second operand
//Divison's result is the quotient, the value of the remainder is its modulus

function isOdd(num) {
  
  if(num%2===1){
    return true;
  } else {
    return false;
  }
}

var output = isOdd(7);
console.log(output);// -->false