"use strict";

window.addEventListener("load", initApp);

let students = [];
function initApp() {
document.querySelector("#create-student-form").addEventListener("submit", submitForm);
}

// DEL 1 i 19
function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  const student = {
    name: name,
    email: email,
    age: age,
  };
  students.push(student);
console.log(students);
}


