const form = document.getElementById('myForm');

const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname');
const lastName = document.getElementById('lname');



form.addEventListener('submit', () => {
  alert('Firstname: ' + firstName.value + '\n Middlename: ' + middleName.value + '\n Lastname: ' + lastName.value);

})
