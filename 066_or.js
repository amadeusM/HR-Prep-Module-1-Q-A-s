//Astra Rai Daniels
//October 19, 2019
//5:47 PM

//Instructions:

/*
Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.

Notes:
* Do not use the || operator.
* Use ! and && operators instead.

var output = or(true, false);
console.log(output); // --> true;
*/

//Random thoughts and notes:

//! exclamation mark, logical operators and is the unary negation operators
//!=m is not equal to
//! in front of paramater, always translates to false?

function or(expression1, expression2) {
  if(!expression1 && !expression2){
    return false;
  }else{
    return true;
  }
}
var output = or(true, false);
console.log(output);