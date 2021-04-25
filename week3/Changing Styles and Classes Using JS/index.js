for (var i = 0; i < 10; i++) {
  var h2 = document.createElement('h2');
  h2.textContent = 'Hello world';
  h2.style.fontSize = '20px';
  h2.style.fontWeight = 'lighter';
  h2.style.fontFamily = 'sansSerif'
  h2.style.color = 'cornflowerblue';
  h2.classList.add('border');
  document.body.appendChild(h2);
};