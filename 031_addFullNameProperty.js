//Astra Rai Daniels
//October 14, 2018
//8:25 PM

//Instructions:
/*
Write a function called "addFullNameProperty".
Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/

//My Thoughts:
//Use dot notation to access the property valuses of firstname and last name
//Wrap the + operator around open and close quotation marks to concatenate 
//valuse of first and last name. 

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}
var output = addFullNameProperty(person);
cosnole.log(output);