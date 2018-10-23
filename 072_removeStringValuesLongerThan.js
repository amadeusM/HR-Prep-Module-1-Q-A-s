//Astra Rai Daniels 
//October 22,2018
//6:17 PM


//Instructions:

/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
*/
//My Thoughts and Notes:
//Use for in loop to loop through the properties of Objects, prop
//Access property of objects like so, obj[]
//Use.length propery to get valuue of string


var obj = {
  name: 'Montana',//string length, 7
  age: 20,
  location: 'Texas'//string length, 5
};

/*Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.*/

function removeStringValuesLongerThan(num, obj) {
 
  for( var prop in obj ){//the for in statement interates over al non-symbol properties of an objects
    if( obj[prop].length>num){
      delete obj[prop];//delete operator removes a property from an object
    }
  }
  return obj;
}

var output = removeStringValuesLongerThan(6, obj);
/*if a property on a given object has a string value longer than 6, 
remove that vaule using the dekete operator*/

console.log(output);