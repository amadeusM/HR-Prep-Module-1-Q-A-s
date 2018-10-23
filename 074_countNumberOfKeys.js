//Astra Rai Daniels
//October 22, 2018
//9:34 PM 

//Instructions:


/*
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3
*/


var obj = {
  a: 1,
  b: 2,
  c: 3
};

function countNumberOfKeys(obj) {
  var keyCounter = 0;//ounter for loop
  for(var key in obj){//use for in loop to interate through array
    keyCounter++;//increment by 1 
  }
  return keyCounter;//return counter number
}
var output = countNumberOfKeys(obj);
console.log(output); // --> 3