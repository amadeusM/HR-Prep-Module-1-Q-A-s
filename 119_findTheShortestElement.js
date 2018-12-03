/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.
Review the following to refresh on use of the sort method:https://www.w3schools.com/jsref/jsref_sort.asp 
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
  if(arr.length < 1){
   return '';  
   
 }else{
  
  var sortedWords = arr.sort(function(a,b){
       return a.length-b.length});
     
      return arr[0];            
 }
}

var output = findShortestElement(['a','two','there']);
console.log(output);