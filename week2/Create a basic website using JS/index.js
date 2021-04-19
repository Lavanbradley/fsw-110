var nav = document.createElement('NAV');
nav.innerHTML = '<a href="/html/">http://www.google.com</a>';
document.body.appendChild(nav);

var h1 = document.createElement('h1');
h1.textContent = 'Hello world';
document.body.appendChild(h1);

var para = document.createElement('p');
para.textContent = 'Here is my p tag';
document.body.appendChild(para);


var ol = document.createElement('ol');
var listItem1 = document.createElement('li');
var listItem2 = document.createElement('li');
var listItem3 = document.createElement('li');
listItem1.textContent= 'Heres';
listItem2.textContent= 'the';
listItem3.textContent= 'list';
ol.appendChild(listItem1);
ol.appendChild(listItem2);
ol.appendChild(listItem3);
document.body.appendChild(ol);

var footer = document.createElement('footer');
footer.textContent = 'Footer';
document.body.appendChild(footer);

