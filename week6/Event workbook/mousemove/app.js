var box = document.querySelector('.red-box');

box.addEventListener('mousemove', function (event) {
 
var x = event.clientX;
var y = event.clientY;

var coor = "X coords: " + x + ", Y coords: " + y;

box.innerHTML = coor;


});