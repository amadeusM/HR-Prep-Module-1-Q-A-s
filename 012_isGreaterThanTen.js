//Astra Rai Daniels
//October 7, 2018
//12:15 PM Time Zone (GMT-7)


//Instructions: 

/*
Write a function called "isGreaterThanTen".
Given a number, "isGreaterThanTen" returns whether it is greater than 10.
var output = isGreaterThanTen(11);
console.log(output); // --> true
*/

//My Thought Process:

//Create a function to check if number is greater than 10
//Function should return a boolean: true or false
//Use if else statement to check number vaule
//Use greater than inequality to compare two quantities
//Given a number greater than 10, var output = is GreaterThanTen(16), console.log(output);-->true

function isGreaterThanTen(num) {
  
  if (num > 10){
      return true;
    } else {
      return false;
    }
}

var output = isGreaterThanTen(16);
console.log(output);