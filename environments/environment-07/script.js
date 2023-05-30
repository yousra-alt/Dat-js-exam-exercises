"use strict";

window.addEventListener("load", start);

const students = [];

function start() {
  document.querySelector("#create-student-form").addEventListener("submit", showStudent);
}

function formClicked(event) {
  event.preventDefault();
  const form = event.target;

  students.push({ name: form.name.value, email: form.email.value, age: Number(form.age.value) });
  showStudent(students);
}

//   const name = form. name.value;
//   const email = form.email.value;
//   const age = form.age.value;

//     CreateStudent(name, email, age);

//   showStudent()

function CreateStudent(name, age, email) {
  const student = {
    name: name,
    age: Number(age),
    email: email,
  };
  console.log(student);
}

function showStudent() {
  document.querySelector("#students-table-body").innerHTML = "";
  students.sort((a, b) => a.name.localeCompare(b.name));
  // lav dom
}
