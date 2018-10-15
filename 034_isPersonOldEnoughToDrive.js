//Astra Rai Daniels 
//October 15, 2018
//9:39 AM


//Instructions
/*
Write a function called "isPersonOldEnoughToDrive".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
Notes:
* The legal driving age in the United States is 16.
var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
*/


//My Thought Process
//I'm somewhat confused.
/*If the name of object is passed as an argument 
through the "person" parameter, of isPersonOldEnoughToDrive function, 
in using dot notation, the age property will be evaluted as 
greater than or equal to 16
The function should return a boolean value
//Notes to self, view hand-written notes on objects
*/
var obj = {
  age: 16
};

function isPersonOldEnoughToDrive(person) {
  return person.age >= 16;
}

var output = isPersonOldEnoughToDrive(obj);
console.log(output);
console.log(obj);