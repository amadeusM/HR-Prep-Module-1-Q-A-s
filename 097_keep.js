/*
Write a function called "keep".

Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

Notes:
* If no elements match, "keep" should return an empty array.

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); --> [2, 2]
*/

function keep(array, keeper) {
  kept = [];//this array will contain elements === keeper
  for (i = 0; i < array.length; i++) {//loop through array passed through function
    if (array[i] === keeper) {//if given item, keeper === to any other elements in the array passed through function parameter, array
      kept.push(array[i]);//if item passed as a argument,held by keeper parameter, push items to empty array, "kept" === pushed to kept[] 
    }
  }
  return kept;
}