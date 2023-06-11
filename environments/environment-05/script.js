// # Øvelse 13
// 1. Importér `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.

"use strict";
import { courses } from "./courses.js";

window.addEventListener("load", initApp);
// let option = document.querySelector("#select-filter-ects").value;

function initApp() {
  document.querySelector("#select-filter-ects").addEventListener("change", filterByOption);
  showCourses(courses);
}

function showCourses(courses) {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    document.querySelector("#courses-list").insertAdjacentHTML(
      "beforeend",
      `
<li>${course.name} - ${course.ectsPoints}</li> 
<br>

`
    );
  }
}

function filterByOption() {
  let option = document.querySelector("#select-filter-ects").value;
  console.log(typeof option);

  //   let filteredList = courses.filter((course) => course.ectsPoints == option);

  let filteredList = courses.filter((course) => course.ectsPoints.toString().includes(option));
  showCourses(filteredList);
}
