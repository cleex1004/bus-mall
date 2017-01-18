'use strict';

//global variables
var numberArray = [];
var pictureArray = [];
var nameArray = [];
var numberDisplayed = [0, 0, 0];
var pictureDisplayed = [];
var nameDisplayed = [];
var count = 0;

// var numone = 0;
// var numtwo = 0;
// var numthree = 0;

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

//creates random number
function randomNumber() {
  var min = Math.ceil(0);
  var max = Math.floor(20);
  return Math.floor(Math.random() * (max - min)) + min;
};
//chooses product to display
function chooseProduct() {
  var num;
  for (var i = 0; i < 3; i++) {
    do {
      num = randomNumber();
    } while (numberDisplayed.includes(num));
    numberDisplayed.push(num);
  };
  if (numberDisplayed.length > 3) {
    numberDisplayed.splice(0,3);
  };
  pictureDisplayed.push(pictureArray[numberDisplayed[0]], pictureArray[numberDisplayed[1]], pictureArray[numberDisplayed[2]]);
  nameDisplayed.push(nameArray[numberDisplayed[0]], nameArray[numberDisplayed[1]], nameArray[numberDisplayed[2]]);
  nameArray[numberDisplayed[0]].shown++;
  nameArray[numberDisplayed[1]].shown++;
  nameArray[numberDisplayed[2]].shown++;
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
//calculates percentage clicked
function percent(clicked, shown) {
  return ((clicked / shown) * 100).toFixed(2);
}
//prints totals/results list
function total() {
  var resultsEl = document.getElementById('results');
  for (var j = 0; j < nameArray.length; j++) {
    var resultsLi = document.createElement('li');
    resultsLi.setAttribute('id', 'here');
    resultsLi.textContent = pictureArray[j] + '- shown: ' + nameArray[j].shown + ', clicked: ' + nameArray[j].clicked + ', percentage clicked: ' + percent(nameArray[j].clicked, nameArray[j].shown) + '%';
    resultsEl.appendChild(resultsLi);
  };
};
//removes images
function remove() {
  var removeEl = document.getElementById('form');
  removeEl.parentElement.removeChild(removeEl);
};
//logs clicks
function click() {
  chooseProduct();
  display();
  var formElOne = document.getElementById('one');
  formElOne.addEventListener('click', function(event) {
    nameDisplayed[0].clicked++;
    count++;
    console.log(count);
    if(count < 25) {
      chooseProduct();
      display();
    } else {
      total();
      remove();
    };
  },false);
  var formElTwo = document.getElementById('two');
  formElTwo.addEventListener('click', function(event) {
    nameDisplayed[1].clicked++;
    count++;
    console.log(count);
    // numberDisplayed = [];
    // pictureDisplayed = [];
    // nameDisplayed = [];
    if(count < 25) {
      chooseProduct();
      display();
    } else {
      total();
      remove();
    };
  },false);
  var formElThree = document.getElementById('three');
  formElThree.addEventListener('click', function(event) {
    nameDisplayed[2].clicked++;
    count++;
    console.log(count);
    // numberDisplayed = [];
    // pictureDisplayed = [];
    // nameDisplayed = [];
    if(count < 25) {
      chooseProduct();
      display();
    } else {
      total();
      remove();
    };
  },false);
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

//call functions
click();

// Function that chooses random number
// function random() {
// return Math.floor(Math.random() * products.length);
// }

// Function that chooses 3 random numbers without repeats
// function chooseProduct() {
//  var product;
//  for (var i = 0; i < 3; i++) {
//    do {
//      product = random();
//    }
//    while (chosenProducts.includes(product));
//    chosenProducts.push(product);
//  }
//  if (chosenProducts.length > 3) {
//    chosenProducts.splice(0,3);
//  }
// }
// sample code from adam
// function displayPics() {
//   var leftIndex = randNum();
//   var leftProduct = allProducts[leftIndex];
//   left.src = leftProduct.path;
//   left.alt = leftProduct.name;
//   leftProduct.views += 1;
//   var centerIndex = randNum();
//   while (centerIndex === leftIndex) {
//     centerIndex = randNum();
//   }
//   var centerProduct = allProducts[centerIndex];
//   center.src = centerProduct.path;
//   center.alt = centerProduct.name;
//   centerProduct.views += 1;
//   var rightIndex = randNum();
//   while (rightIndex === leftIndex || rightIndex === centerIndex) {
//     rightIndex = randNum();
//   }
//   var rightProduct = allProducts[rightIndex];
//   right.src = rightProduct.path;
//   right.alt = rightProduct.name;
//   rightProduct.views += 1;
//   previouslyShown = [leftIndex, centerIndex, rightIndex];
// }
