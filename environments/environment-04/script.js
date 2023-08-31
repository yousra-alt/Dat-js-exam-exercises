"use strict";

window.addEventListener("load", initApp);

import { teachers } from "./teachers.js";

function initApp() {
teachers.sort(sortByEmail);
teachers.sort(sortByName);
showTeachers(teachers);
}


function showTeachers (teachers) {
for (const teacher of teachers) {
document.querySelector("#teachers-list").insertAdjacentHTML(
  "beforeend",
  /*HTML*/ `

<li>${teacher.name}</li>
<li>${teacher.email}</li>
<br>



`
);    
}
}

function sortByName(a, b) {
return a.name.localeCompare(b.name);
}


function sortByEmail (a, b) {
return a.email.localeCompare(b.email);

}

