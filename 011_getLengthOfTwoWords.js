//Astra Rai Daniels
//October 7, 2018
//11:38 AM, Time Zone:(GMT-7)



//Instructions:

/*
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
*/

//My Thought Process:

//Writing a function, with two parameters, data type of both parameters are both strings
//To find lenght of a string, the string.length can be used
//Therefore,if you have to strings, you can find length of each string independently 
//Add lenght of each string using arithmetic addition operator
//to test, create a variable named output to add to values to test that holds results of arguements passed through getLengthOfTwoWords
//Output to console to test code

function getLengthOfTwoWords(word1, word2){
	return word1.length + word2.length;
}

var output = getLengthOfTwoWords('Hack', 'Reactor');
console.log(output);