
var square = document.getElementById('square');

window.addEventListener('load', () => {
  square.style.backgroundColor = 'black';
});

square.addEventListener('mouseover', function () {
  square.style.backgroundColor = 'green';
});

square.addEventListener('mousedown', function () {
  square.style.backgroundColor = 'yellow';
});

square.addEventListener('mouseup', function () {
  square.style.backgroundColor = 'blue';
});

square.addEventListener('dblclick', function () {
  square.style.backgroundColor = 'red';
});


var p = document.createElement('p');
p.innerHTML = 'More content';
document.body.appendChild(p);

window.addEventListener('scroll', function () {
  square.style.backgroundColor = 'purple'
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled === scrollable) {
    square.style.backgroundColor('black');
  }
})

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == '82') {
    square.style.backgroundColor = 'red';
  } if (key.keyCode == '71') {
    square.style.backgroundColor = 'green';
  }  if (key.keyCode == '89') {
    square.style.backgroundColor = 'yellow';
  }  if (key.keyCode == '66') {
    square.style.backgroundColor = 'blue';
  }  if (key.keyCode == '80') {
    square.style.backgroundColor = 'purple';
  }
};


