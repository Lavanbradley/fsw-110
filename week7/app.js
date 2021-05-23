let addToDoButton = document.getElementById('addToDo');

let toDoContainer = document.getElementById('toDoContainer');

let inputField = document.getElementById('inputField');

let inputField2 = document.getElementById('inputConField');

addToDoButton.addEventListener('click', function () {
  var paragraph = document.createElement('p');
  paragraph.innerText += inputField.value;
  paragraph.style.color = "black";
  paragraph.style.fontSize = "40px"
  paragraph.style.textDecoration = "underline";
  toDoContainer.appendChild(paragraph);


  var paragraph2 = document.createElement('p');
  paragraph2.innerText += inputField2.value;
  paragraph2.style.color = "white";
  paragraph2.style.textDecoration = "underline";
  toDoContainer.appendChild(paragraph2);
  
  var trash = document.createElement('button');
  trash.innerText = "X";
  trash.style.backgroundColor = "white"
  toDoContainer.appendChild(trash);
  inputField.value = "";
  inputField2.value = "";
  
  trash.addEventListener('click', function () {
    toDoContainer.removeChild(paragraph);
    toDoContainer.removeChild(paragraph2);
    toDoContainer.removeChild(trash);
  })
})