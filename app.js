'use strict';
var displayed = [];

function Product(number, name, picture) {
  this.number = number;
  this.name = name;
  this.picture = picture;
  this.shown = [];
  this.clicked = [];
};

function randomNumber() {
  var min = Math.ceil(1);
  var max = Math.floor(20);
  for (var i = 0; i < 3; i++) {
    displayed.push(Math.floor(Math.random() * (max - min)) + min);
  };
  return Math.floor(Math.random() * (max - min)) + min;
};

var bag = new Product(1, 'Starwars Suitcase', bag.jpg);
var banana = new Product(2, 'Banana Slicer', banana.jpg);
var bathroom = new Product(3, 'Ipad Stand', bathroom.jpg);
var boots = new Product(4, 'Toeless Rain Boots', boots.jpg);
var breakfast = new Product(5, 'All-in-one Breakfast Maker', breakfast.jpg);
var bubblegum = new Product(6, 'Meatball Bubblegum', bubblegum.jpg);
var chair = new Product(7, 'Red Chair', chair.jpg);
var cthulhu = new Product(8, 'Action Figure', cthulhu.jpg);
var dogduck = new Product(9, 'Duck Bill for Dog', dogduck.jpg);
var dragon = new Product(10, 'Dragon Meat Can', dragon.jpg);
var pen = new Product(11, 'Utensil Capped Pen', pen.jpg);
var petsweep = new Product(12, 'Sweeping Slippers for Pet', petsweep.jpg);
var scissors = new Product(13, 'Pizza Slice Scissors', scissors.jpg);
var shark = new Product(14, 'Shark Sleeping Bag', shark.jpg);
var sweep = new Product(15, 'Baby Sweeper Onesie', sweep.jpg);
var tauntaun = new Product(16, 'Tauntaun Sleeping Bag', tauntaun.jpg);
var unicorn = new Product(17, 'Unicorn Meat Can', unicorn.jpg);
var usb = new Product(18, 'Tentacle Usb', usb.gif);
var watercan = new Product(19, 'Watering Can', watercan.jpg);
var wineglass = new Product(20, 'Wine Glass', wineglass.jpg);

randomNumber();
