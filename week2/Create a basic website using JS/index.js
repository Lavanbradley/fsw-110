var nav = document.createElement('NAV');
var home = document.createElement('a');
home.textContent ='Home'
home.style.padding = '30px';
var about = document.createElement('a');
about.textContent = 'About';
about.style.padding = '30px'
document.body.appendChild(nav);
document.body.appendChild(home);
document.body.appendChild(about);



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
listItem1.textContent = 'Heres';
listItem2.textContent = 'the';
listItem3.textContent = 'list';
ol.appendChild(listItem1);
ol.appendChild(listItem2);
ol.appendChild(listItem3);
document.body.appendChild(ol);

var footer = document.createElement('footer');
footer.textContent = 'Footer';
document.body.appendChild(footer);




