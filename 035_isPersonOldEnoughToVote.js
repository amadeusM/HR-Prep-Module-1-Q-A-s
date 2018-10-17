//Astra Rai Daniels
//October 16, 2018
//10:40 PM

//Instructions:

/*
Write a function called "isPersonOldEnoughToVote".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
Notes:
* The legal voting age in the United States is 18.
var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true
*/

//My Thoughts:

//Use dot notation to access the value of age property
//Check if value of age is 18 or greator
//The funciton should return a boolean

var obj = {
  age: 18
};

function isPersonOldEnoughToVote(person) {
  return person.age >=18;
}
var output = isPersonOldEnoughToVote(obj);
console.log(output);