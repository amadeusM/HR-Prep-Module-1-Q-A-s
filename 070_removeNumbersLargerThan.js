//Astra Rai Daniels
//October 21, 2012
//10:14 PM

//Instructions:

/*
Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
*/
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
};

function removeNumbersLargerThan(num, obj) {
  
  for(var key in obj){//iterate through objects
    if(obj[key] > num){//check num argument is larger than a property value in given object, obj 
      delete obj[key];      
    }
  }
}
removeNumbersLargerThan(5, obj);
console.log(obj);// --> {a: 2, c:'montana'}