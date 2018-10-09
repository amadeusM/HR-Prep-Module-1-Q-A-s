//Astra Rai Daniels 
//October 8, 2018
//12:38 PM

//My Thought Process:


//Use the remainder operator, modulus, to determine if num1 and num2 are odd numbers.
//Remember notes from Module 1, 019? 
//The definition of an odd number is an integer which is not a multiple of two. 
//If divided by two, the result is a fraction. 
//The result of division is the quotient. The value of a remainder is its modulus. 
//Use the logical operator && compare values of num1 and num2, to return a boolean value 


//Instructions: 

/*
Write a function called "areBothOdd".
Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
var output = areBothOdd(1, 3);
console.log(output); // --> true
*/

function areBothOdd(num1, num2) {
  if(num1 % 2===1 && num2 %2===1){
    return true;
  }else{
    return false;
  }
}

var output = areBothOdd(1,3);
console.log(output);// --> true