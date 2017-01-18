'use strict';
//global variables
var numberArray = [];
var pictureArray = [];
var numberDisplayed = [];
var pictureDisplayed = [];
var totalDisplayed = [];
var clicked = [];
var count = 0;
var numone = 0;
var numtwo = 0;
var numthree = 0;
var nameArray = [];
var nameDisplayed = [];

//product constructor
function Product(number, description, picture) {
  this.number = number;
  this.description = description;
  this.picture = picture;
  this.shown = 0;
  this.clicked = 0;
  numberArray.push(this.number);
  pictureArray.push(this.picture);
  nameArray.push(this);
};

//random number function
function randomNumber() {
  var min = Math.ceil(1);
  var max = Math.floor(20);
  do {
    numone = Math.floor(Math.random() * (max - min)) + min;
    numtwo = Math.floor(Math.random() * (max - min)) + min;
    numthree = Math.floor(Math.random() * (max - min)) + min;
  } while (numone === numtwo || numone === numthree || numtwo === numthree);
  numberDisplayed.push(numberArray[numone], numberArray[numtwo], numberArray[numthree]);
  pictureDisplayed.push(pictureArray[numone], pictureArray[numtwo], pictureArray[numthree]);
  totalDisplayed.push(numberArray[numone], numberArray[numtwo], numberArray[numthree]);
  ;
  nameDisplayed.push(nameArray[numone], nameArray[numtwo], nameArray[numthree]);
  nameArray[numone].shown++;
  nameArray[numtwo].shown++;
  nameArray[numthree].shown++;
};

//displays images as clickable button
function display() {
  var inputElOne = document.getElementById('one');
  inputElOne.setAttribute('src', 'img/' + pictureDisplayed[0] + '.jpg');
  var inputElTwo = document.getElementById('two');
  inputElTwo.setAttribute('src', 'img/' + pictureDisplayed[1] + '.jpg');
  var inputElThree = document.getElementById('three');
  inputElThree.setAttribute('src', 'img/' + pictureDisplayed[2] + '.jpg');
};

var formElOne = document.getElementById('one');
formElOne.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  // clicked.push(numberDisplayed[0]);
  nameDisplayed[0].clicked++;
  numberDisplayed = [];
  pictureDisplayed = [];
  nameDisplayed = [];
  randomNumber();
  display();
  count++;
  var oldEl = document.getElementById('results');
  oldEl.remove;
  total();
},false);

var formElTwo = document.getElementById('two');
formElTwo.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  // clicked.push(numberDisplayed[1]);
  nameDisplayed[1].clicked++;
  numberDisplayed = [];
  pictureDisplayed = [];
  nameDisplayed = [];
  randomNumber();
  display();
  count++;
  var oldEl = document.getElementById('results');
  oldEl.remove;
  total();
},false);

var formElThree = document.getElementById('three');
formElThree.addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation();
  // clicked.push(numberDisplayed[2]);
  nameDisplayed[2].clicked++;
  numberDisplayed = [];
  pictureDisplayed = [];
  nameDisplayed = [];
  randomNumber();
  display();
  count++;
  var oldEl = document.getElementById('results');
  oldEl.remove;
  total();
},false);

function total() {
  var resultsEl = document.getElementById('results');
  for (var w = 0; w < nameArray.length; w++) {
    var resultsLi = document.createElement('li');
    resultsLi.setAttribute('id', 'here');
    resultsLi.textContent = pictureArray[w] + ' shown: ' + nameArray[w].shown + ' clicked: ' + nameArray[w].clicked;
    resultsEl.appendChild(resultsLi);
  };
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
