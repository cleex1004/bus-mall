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
var locStorShown = [];
var locStorClicked = [];
var locShown;
var locClicked;

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
  };
  var context = document.getElementById('chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = '#000099';
  Chart.defaults.global.defaultFontSize = 14;
  Chart.defaults.global.defaultFontFamily = 'helvetica';
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
};
//removes event listener
function remove() {
  var removeEL1 = document.getElementById('one');
  removeEL1.removeEventListener('click', clickEvent0, false);
  var removeEL2 = document.getElementById('two');
  removeEL2.removeEventListener('click', clickEvent1, false);
  var removeEL3 = document.getElementById('three');
  removeEL3.removeEventListener('click', clickEvent2, false);
};
// sum function
function sum(a, b) {
  return (a + b);
};
//checks if local storage has data makes arrays
function locStorGet() {
  var test = localStorage.getItem('length');
  test = JSON.parse(test);
  console.log(test + 'ls length');
  if (test === 2) {
    var locShown = localStorage.getItem('shown');
    var locClicked = localStorage.getItem('clicked');
    locShown = JSON.parse(locShown);
    locClicked = JSON.parse(locClicked);
    for(var n = 0; n < nameArray.length; n++) {
      locStorShown.push(sum(nameArray[n].shown, locShown[n]));
      locStorClicked.push(sum(nameArray[n].clicked, locClicked[n]));
    };
  } else {
    for(var m = 0; m < nameArray.length; m++) {
      locStorShown.push(nameArray[m].shown);
      locStorClicked.push(nameArray[m].clicked);
    };
  };
};
//into local storage
function locStorSet() {
  localStorage.setItem('shown', JSON.stringify(locStorShown));
  localStorage.setItem('clicked', JSON.stringify(locStorClicked));
  // localStorage.setItem('length', JSON.stringify(2));
};
// event function
function clickEvent0(event) {
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
    locStorGet();
    locStorSet();
  };
};
function clickEvent1(event) {
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
    locStorGet();
    locStorSet();
  };
};
function clickEvent2(event) {
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
    locStorGet();
    locStorSet();
  };
};
//click function
function click() {
  chooseProduct();
  display();
  var imgElOne = document.getElementById('one');
  imgElOne.addEventListener('click', clickEvent0, false);
  var imgElTwo = document.getElementById('two');
  imgElTwo.addEventListener('click', clickEvent1,false);
  var imgElThree = document.getElementById('three');
  imgElThree.addEventListener('click', clickEvent2, false);
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
