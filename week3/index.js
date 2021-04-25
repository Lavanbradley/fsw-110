

for (var i = 0; i < 10; i++) {
  var h1 = document.createElement('h1');
  h1.textContent = 'Hello world';
  h1.style.color = 'red';
  document.body.appendChild(h1);
};

var names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];


var nameList = document.getElementById('name');
for (var i = 0; i < names.length; i++) {
  nameList.innerHTML += '<li>' + names[i] + '</li>'
}