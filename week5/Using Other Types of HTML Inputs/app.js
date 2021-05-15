const form = document.getElementById('form');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const age = document.getElementById('age');

const city = document.getElementById('city');
const gender = document.getElementById('genderSelect');
var btnSubmit = document.getElementById('button');


btnSubmit.addEventListener('click', getRestrict);
function getRestrict() {
  var restrict = [];
  if (form.elements["Eggs"].checked) {
    restrict.push(document.getElementById("Eggs").value)
  }
  if (form.elements["Milk"].checked) {
    restrict.push(document.getElementById("Milk").value)
  }
  if (form.elements["Peanuts"].checked) {
    restrict.push(document.getElementById("Peanuts").value)
  }
  var question = document.getElementById('question').value
  var questionAnswer = "";
  var a;
  for (a = 0; a < question.length; a++) {
    if (question[a].checked) {
      questionAnswer = questionAnswer + question[a].value + " ";
    }
  }






  alert('Firstname: ' + firstName.value + '\nLastname: ' + lastName.value + '\nGender: ' + gender.value + '\nCity: ' + city.value + '\nDietary restrictions: ' + restrict + '\nHave you ever shopped with us: ' + question);

  document.getElementById('form').reset();
}