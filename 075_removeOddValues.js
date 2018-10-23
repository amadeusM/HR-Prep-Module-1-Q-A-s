//Astra Rai Daniels
//October 22, 2018
//7:45 PM

//Instructions:


/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
*/

//My Thoughts and Notes:
/*
-the remainder (%) operator returns the remainder left when one operand is divided by a second operand. 
-division, result is quotient, the value of remainder is its modulus
-If a number has a remainder of zero, when divided by 2, number is even, if else, number is odd 
-An even # is any integer (never a fraction) that can be divided exactly by two
-delelte operator: The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
-Triple Equals === is superior to double equals. Whenever possible,  use triple equals to test equality. By testing the type and value you can be sure that you are always executing a true equality test.
*/

var obj = {
  a: 2,
  b: 3,
  c: 4
};

function removeOddValues(obj) {
  for(var key in obj){
    if(obj[key] %2 ===1){
      delete obj[key];
    } 
  }
}


removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }