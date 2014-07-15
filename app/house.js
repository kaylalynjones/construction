'use strict';


function House(name, material, year) {
  this.name =  name;
  this.material = material;
  this.year = parseInt(year);
  this.rooms = [];
}


House.prototype.area = function() {
  var combinedArea = 0;
  for (var i = 0; i< this.rooms.length; i++) {
    combinedArea += this.rooms[i].area();
  }
  return combinedArea;
};

House.prototype.costTotal = function() {
 var sum = 0;
 for (var i =0; i < this.rooms.length; i++){
   sum += this.rooms[i].cost();
 }
 
 return sum;
};

module.exports = House;

