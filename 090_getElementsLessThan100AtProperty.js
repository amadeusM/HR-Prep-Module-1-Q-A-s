//Astra Rai Daniels
//October 31, 2018
//5:04 PM

//Instructions:

/*
Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements less than 100, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

*/
//an array within an object
var obj = {
  key: [1000, 20, 50, 500]
};

function getElementsLessThan100AtProperty(obj, key) {
  
  var rtn = [];
  //loop through elements of the array at obj[key]:
  for(var prop in obj[key]){
    //if an element is less than 100
    if(obj[key][prop] < 100){
    //push to our rtn array:
    //20 and 50 should be the only elements in rtn array
    rtn.push(obj[key][prop]);
    }
  }
  return rtn;
}

var output = getElementsLessThan100AtProperty(obj,'key');
console.log(output);