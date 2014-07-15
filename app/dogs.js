/* jshint -W069 */
/* global prompt:true */
'use strict';
var prompt = require('sync-prompt').prompt;
//creating a object manually
//
var dogs = [];

var d1 = {};
d1.name = 'Fido';
d1.age = 3;

var d2 = {name:'Spot', age:5};

var d3 = {};
d3['name'] = 'Lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a};

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1, d2, d3, d4, d5);

console.log('Dogs: ', dogs);
console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);

//--------------------------------------------
//creating objects using a constructor
//

function Dog(name, age){
  this.name = name;
  this.age = age;
}

var d6 = new Dog('fluffy', 2);
console.log(d6);

console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);


var initiate = prompt('Create a dog? Y/N');

while(initiate.toLowerCase() !== 'n'){
  name = prompt('Name: ');
  age = prompt('Age: ');
  
  var newDog = new Dog(name, age);
  dogs.push(newDog);

  initiate = prompt('Create a dog? Y/N');
}
console.log('Dogs: ', dogs);




