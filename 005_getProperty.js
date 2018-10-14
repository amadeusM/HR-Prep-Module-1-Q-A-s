//Astra Rai Daniels 
//October 13, 2018
//8:45 PM


//Instructions

/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

//create an object with a a given key, called key
//the value of the object, key, should be 'value'

var obj = {
  key: 'value'
//do not add semicolon, it causes and error.
}

function getProperty(obj, key) {
  return obj[key];
}

var output = getProperty(obj, 'key');
//if line about is written like this
//var output = getProperty(obj), will return undefinded.
console.log(output); // --> 'value'