//Astra Rai Daniels 
//October 22, 2018
//7:26 PM

//Instructions:

/*
Write a function called "removeEvenValues".

Given an object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

Example:

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
*/
//My Thoughts and Notes:
/*
//My Thought Process:

-the remainder (%) operator returns the remainder left when one operand is divided by a second operand. 
-division, result is quotient, the value of remainder is its modulus
-If a number has a remainder of zero, number is even
-An even # is any integer (never a fraction) that can be divided exactly by two
-Write a function that returns a boolean value, true of false, based on if number is even or odd, use if/else statement within function
-delelte operator: The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
-Triple Equals === is superior to double equals. Whenever possible, you should use triple equals to test equality. By testing the type and value you can be sure that you are always executing a true equality test.
*/


var obj = {
  a: 2,
  b: 3,
  c: 4
};


function removeEvenValues(obj) {
  for (var key in obj){
    if(obj[key] %2===0){
      delete obj[key]
    }
  }
}
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }