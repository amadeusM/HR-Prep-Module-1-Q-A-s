//Astra Rai Daniels 
//October 13, 2018
//10:37 PM

//Instructions

/*
Write a function called "isEvenLength".
Given a word, "isEvenLength" returns whether the length of the word is even.
var output = isEvenLength('wow');
console.log(output); // --> false
*/

//My Thoughts

/*
Within an if/else statement, determine words length using length property
Once length is known, divide by 2, if there is a remainder, length odd, return false
If no remainder, length of words is even, return true
*/

function isEvenLength(word) {
  
  if( word.length %2===0 ){
    
    return true; 
  
  } else {
    
    return false;
  }
}

var output = isEvenLength('wow');
console.log(output); // --> false