//Just adding a note so I can push to repository

var coffee = document.getElementById('coffee');
var bagel = document.getElementById('bagel');
var water = document.getElementById('water');
var total = document.getElementById('total');
var btn = document.getElementById('btn')

btn.addEventListener('click', getTotal);

function getTotal(event) {
  event.preventDefault();
  total.innerHTML = coffee.value * 8 + bagel.value * 2 + water.value * 3 + '$';
}