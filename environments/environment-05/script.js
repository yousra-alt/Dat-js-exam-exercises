"use strict";
// # Øvelse 14

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `startDate` `ectsPoints`.
// 3. Lav en funktion, der sorterer listen af `courses` stigende efter `startDate`. Vis sorteringen på websiden.

import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  courses.sort(sortListOfCourses);

  showCourses(courses);
}

function showCourses(courses) {
  for (const course of courses) {
    document.querySelector("#courses-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
<li>${course.name}</li>
<li>${course.startDate}</li>
<li>${course.ectsPoints}</li>
<br>


`
    );
  }
}

function sortListOfCourses(a, b) {
  return a.startDate.localeCompare(b.startDate);
}
