//Astra Rai Daniels 
//October 14, 2018
//12:53 PM

//Instructions:

/*
Write a function called "isEvenAndGreaterThanTen".
Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false
*/

//My Thoughts:
//Use remainder operator to determine if num is even or odd
//Divide number by two, if there is no remainder, the number is even
//use the AND, &&, operator to test num is even AND greater than 10

function isEvenAndGreaterThanTen(num) {
  
  if( num %2===0 && num >10 ){
    return true;
    } else {
    return false;
  }  
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false