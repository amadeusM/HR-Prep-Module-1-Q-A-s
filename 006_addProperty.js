//Astra Rai Daniels 
//October 13, 2018
//0:37 AM


//Instructions

/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

var myObj ={};

function addProperty(obj, key) {
  obj[key] = true;
  return obj[key];
}
var output = addProperty(myObj, "myProperty")
//console.log(myObj.myProperty); //--> true
console.log(myObj);// -- Object 


//My Thoughts and Notes

//Ignore notes below, what was I thinking? smh
//var output = addProperty(myObj, "myProperty");
//console.log(output);// --> // --> true
//console.log(myObj);// --> Object {}