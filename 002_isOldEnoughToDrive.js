/*
Write a function called "isOldEnoughToDrive".
Given a number, in this case an age, 'isOldEnoughToDrive' returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16.
var output = isOldEnoughToDrive(22);
console.log(output); // --> true
*/

function isOldEnoughToDrive(age) {
  if( age >= 16 ){
    return true;
  }else{
     return false;
  }
}

var output = isOldEnoughToDrive(22)
console.log(output);  

//Notes: Instructions stated to return true or false value, these are boolean values
//Truthy? In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All valuses are truthy unless they are defined as falsy ?? - Need to Review this concept