/*
Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
*/

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
function removeNumbersLessThan(num, obj) {
  for (var key in obj) {  // iterate through object, obj
    if (obj[key] < num) {  // if object's key is less than the number passed as argument through num parameter function
      delete obj[key];  // remove that property from the object
    }
  }
}

removeNumbersLessThan(5, obj);
console.log(obj);// --> { a: 8, c: 'montana' }