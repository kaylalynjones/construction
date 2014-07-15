/* jshint -W069*/
/* global prompt:true */

'use strict';

var prompt = require('sync-prompt').prompt;

var Room = require('./room');
var House = require('./house');

var r1 = new Room( 'living', 10, 12, 8, 'carpet', 'aqua');
var r2 = new Room( 'dining', 8, 10, 8, 'tile', 'green');
var r3 = new Room( 'bedroom', 9, 11, 10, 'wood', 'orange');

console.log(r1,r2,r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1785);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1, r2, r3);
console.log(h1, h2, h3);

//originally found the area this way:
/*var combinedArea = 0;
for (var i = 0; i< h1.rooms.length; i++) {
 combinedArea += h1.rooms[i].area();
}
console.log( 'total area is: ', combinedArea);
*/

console.log('the area of r1 is: ', r1.area());
console.log('the total of h1: ', h1.area());

console.log('cost of paint: ', r1.costOfPaint());


console.log('the cost of r1 : ', r1.cost());
console.log('the cost of r2 : ', r2.cost());
console.log('the cost of r3 : ', r3.cost());
console.log('the cost of h1: ', h1.costTotal());
