'use strict';


function Room( name, length, width, height, floor, color ) {
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}


Room.prototype.area = function(){
    return this.length * this.width;
};


Room.prototype.costOfPaint = function(){
  var wallArea;
  var paintCost;
  wallArea = (this.height * this.width)*2;
  wallArea += (this.height * this.length)*2;
  paintCost = wallArea * 0.50;
  return paintCost;
};

Room.prototype.cost = function(){
  var rate;
  var total = 0;

  switch(this.floor){
    case 'carpet':
      rate = 15;
      break;
    case 'tile':
      rate = 12;
      break;
    case 'wood':
      rate = 10;
      break;
  }
  total += rate * this.area();
  total += this.costOfPaint();
  return total;
};

module.exports = Room;

