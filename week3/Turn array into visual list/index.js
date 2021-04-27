for (var i = 0; i < 10; i++) {
  var h1 = document.createElement('h1');
  h1.textContent = 'Hello world';
  h1.style.color = 'red';
  document.body.appendChild(h1);
};



var names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

for (var i = 0; i < names.length; i++) {
  var ul = document.createElement('ul');
  document.body.appendChild(ul);
  ul.innerHTML += '<li>' + names[i] + '</li>'
};