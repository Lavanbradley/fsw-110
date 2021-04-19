var newH1 = document.createElement('h1');
newH1.textContent = 'Welcome to my JS site';
document.body.appendChild(newH1);

var para = document.createElement('p');
para.textContent = 'All of this was created using Javascript';
document.body.appendChild(para);


var ol = document.createElement('ol');
var listItem1 = document.createElement('li');
var listItem2 = document.createElement('li');
var listItem3 = document.createElement('li');
listItem1.textContent= 'one';
listItem2.textContent= 'two';
listItem3.textContent= 'three';
ol.appendChild(listItem1);
ol.appendChild(listItem2);
ol.appendChild(listItem3);
document.body.appendChild(ol);





