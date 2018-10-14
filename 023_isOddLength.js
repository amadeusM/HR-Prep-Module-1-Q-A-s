//Astra Rai Daniels 
//October 13, 2018
//10:00 PM


//Instructions:

/*
Write a function called "isOddLength".
Given a word, "isOddLength" returns whether the length of the given word is odd.
var output = isOddLength('special');
console.log(output); // --> true
*/

//My Thoughts:
//Use the length property to find length of word
//Then use % to check if lenght of word/2 Has a remainder, is so, number is odd 


function isOddLength(word) {
  if( word.length %2 === 1 ){
     
    return true;
  
  } else {
    
    return false;
  }
}

var output = isOddLength('special');
console.log(output);