'use strict';
//global variables
var numberArray = [];
var pictureArray = [];
var numberDisplayed = [];
var pictureDisplayed = [];

//product constructor
function Product(number, description, picture) {
  this.number = number;
  this.name = description;
  this.picture = picture;
  this.shown = [];
  this.clicked = [];
  numberArray.push(this.number);
  pictureArray.push(this.picture);
};

//random number function
function randomNumber() {
  var min = Math.ceil(1);
  var max = Math.floor(20);
  for (var u = 0; u < 3; u++) {
    numberDisplayed.push(numberArray[Math.floor(Math.random() * (max - min)) + min]);
    pictureDisplayed.push(pictureArray[Math.floor(Math.random() * (max - min)) + min]);
  };
};

function display() {
  var legendEl = document.getElementById('here');
  for (var v = 0; v < 3; v++) {
    var inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'image');
    inputEl.setAttribute('src', '/img/' + pictureDisplayed[v] + '.jpg');
    legendEl.appendChild(inputEl);
  }
};

//create all products
var bag = new Product(1, 'Starwars Suitcase', 'bag');
var banana = new Product(2, 'Banana Slicer', 'banana');
var bathroom = new Product(3, 'Ipad Stand', 'bathroom');
var boots = new Product(4, 'Toeless Rain Boots', 'boots');
var breakfast = new Product(5, 'All-in-one Breakfast Maker', 'breakfast');
var bubblegum = new Product(6, 'Meatball Bubblegum', 'bubblegum');
var chair = new Product(7, 'Red Chair', 'chair');
var cthulhu = new Product(8, 'Action Figure', 'cthulhu');
var dogduck = new Product(9, 'Duck Bill for Dog', 'dogduck');
var dragon = new Product(10, 'Dragon Meat Can', 'dragon');
var pen = new Product(11, 'Utensil Capped Pen', 'pen');
var petsweep = new Product(12, 'Sweeping Slippers for Pet', 'petsweep');
var scissors = new Product(13, 'Pizza Slice Scissors', 'scissors');
var shark = new Product(14, 'Shark Sleeping Bag', 'shark');
var sweep = new Product(15, 'Baby Sweeper Onesie', 'sweep');
var tauntaun = new Product(16, 'Tauntaun Sleeping Bag', 'tauntaun');
var unicorn = new Product(17, 'Unicorn Meat Can', 'unicorn');
var usb = new Product(18, 'Tentacle Usb', 'usb');
var watercan = new Product(19, 'Watering Can', 'watercan');
var wineglass = new Product(20, 'Wine Glass', 'wineglass');

randomNumber();
display();
