/*
Write a function called "getLengthOfWord".
Given a word, "getLengthOfWord" returns the length of the given word.
var output = getLengthOfWord('some');
console.log(output); // --> 4
*/

function getLengthOfWord(word) {
 return word.length;
}

var output = getLengthOfWord('cryptocurrency');
console.log(output);//-->


//NOtes: string.length property retuns the numb of code units in the string
//An empty string length is 0
//Erros experienced: failing to wrap function argument in quotes
//i.e. ('cryptocurrency') not (cryptocurrency) <--former is how to pass a variable