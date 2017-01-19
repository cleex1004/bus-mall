'use strict';

//global variables
var numberArray = [];
var pictureArray = [];
var nameArray = [];
var numberDisplayed = [];
var pictureDisplayed = [];
var nameDisplayed = [];
var count = 0;
var chartData = [];
var chartData2 = [];
var chartColors = [];
var chartLabels = [];

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
  return Math.floor(Math.random() * (20 - 0)) + 0;
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
  console.log(numberDisplayed);
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
  if(((clicked / shown) * 100).toFixed(2) === 'NaN') {
    return '0.00';
  } else {
    return ((clicked / shown) * 100).toFixed(2);
  }
};
//makes chart
function makeChart() {
  for(var k = 0; k < numberArray.length; k++) {
    chartData.push(nameArray[k].shown);
    chartData2.push(nameArray[k].clicked);
    chartLabels.push(pictureArray[k] + ' ' + percent(nameArray[k].clicked, nameArray[k].shown) + '%');
    // chartLabels.push(percent(nameArray[k].clicked, nameArray[k].shown) + '%');
    chartColors.push('#191970');
    chartColors.push('#0000FF');
  };
  var context = document.getElementById('chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = '#000099';
  Chart.defaults.global.defaultFontSize = 14;
  var productChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          type: 'bar',
          label: '# of times product shown',
          data: chartData,
          backgroundColor:'#191970'
        },
        {
          type: 'bar',
          label: '# of times product clicked',
          data: chartData2,
          backgroundColor:'#0000FF'
        }
      ]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    },
  });
}

//removes event
function remove() {
  var removeEL = document.getElementById('one');
  removeEL.removeEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
  });
};
//logs clicks
function click() {
  chooseProduct();
  display();
  var formElOne = document.getElementById('one');
  formElOne.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    nameDisplayed[0].clicked++;
    count++;
    console.log(count);
    pictureDisplayed = [];
    nameDisplayed = [];
    if(count < 25) {
      chooseProduct();
      display();
    } else {
      makeChart();
      remove();
    };
  },false);
  var formElTwo = document.getElementById('two');
  formElTwo.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    nameDisplayed[1].clicked++;
    count++;
    console.log(count);
    pictureDisplayed = [];
    nameDisplayed = [];
    if(count < 25) {
      chooseProduct();
      display();
    } else {
      makeChart();
      remove();
    };
  },false);
  var formElThree = document.getElementById('three');
  formElThree.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    nameDisplayed[2].clicked++;
    count++;
    console.log(count);
    pictureDisplayed = [];
    nameDisplayed = [];
    if(count < 25) {
      chooseProduct();
      display();
    } else {
      makeChart();
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
