//Astra Rai Daniels 
//Octoboer 13, 2018
//4:19 AM

/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

//My Notes and Thoughts:
//Remove the "name" key from the obj{}
//Use the delete to remove the "name" key
/*Defintion of Delete Operator: The JavaScript delet
te operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically. (Resource, MDN)*/
//Syntax for delete expression
   //object: the name of an object or an expresion      //evaluating to an object
   //property: the property you want to delete
var obj = {
  name: 'Sam',
  age: 20
}
function removeProperty(obj, key) {
  return delete obj.name;
}

var output = removeProperty(obj,'name');
//console.log(output);//--true 
//change object should only have one key, age
console.log(obj);// --> Object {age: 20}