/*
Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

function isOldEnoughToDrink(age) {
  // your code here
  /* START SOLUTION */
  if(age >= 21){
    return true;
  }
  else{
    return false;
  }
  /* END SOLUTION */
}
/*variable output will hold the arguement passed through isOldEnoughToDrinkFunction*/
var output = isOldEnoughToDrink(44);
//should variable be defined, online 9, above function declaration
//returns booleans value true, because 44 is greater than drinking age
console.log(output);
//question: this code works without using else, should else be omitted?//