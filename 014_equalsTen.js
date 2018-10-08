//Astra Rai Daniels 
//October 7, 2018
// 9:35 PM
/*
Write a function called "equalsTen".
Given a number, "equalsTen" returns whether or not the given number is 10.
var output = equalsTen(9);
console.log(output); // --> false
*/
//My Thought Process:

/*Within the equalsTen(), with one parameter, num, use if/else statement to check if arguement passed through num parameter is equals 15, use less than operator*/

function equalsTen(num) {
  if(num == 10){
    return true;
  }else{
    return false;
  }
}
var output = equalsTen(9);
console.log(output);//--> false