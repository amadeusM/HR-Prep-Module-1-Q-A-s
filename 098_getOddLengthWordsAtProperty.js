/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.
*/

var obj = {
  key: ['I', 'has', 'some', 'words']
};

function getOddLengthWordsAtProperty(obj, key) {
  
  var oddLengthWords = [];
  
  //if object's 'key' property is not an array, return undefined:
  if( !Array.isArray(obj[key]) ){
    return [];
  }
  
  //use a for in loop to interate through object properties
  for ( var element in obj[key] ){
  //check length of element in array within given object using the array.lenght method
 //if the length of element, when divided by 2 is not equal to zero, the    lenght of element is an odd number 
    if ( obj[key][element].length % 2 !== 0 ){
      oddLengthWords.push(obj[key][element]);
    }
  }
//for elements, with an odd word length, store those words in the array, oddLengthWords
return oddLengthWords;
}
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']