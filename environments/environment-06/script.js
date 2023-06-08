"use strict";

window.addEventListener("load", initApp);
let users = [
  { name: "Drake", role: "corny nigga", age: "34" },
  { name: "Yousra", role: "BossMan", age: "2" },
  { name: "Benedikte", role: "bitch", age: "28" },
  { name: "Adam", role: "Bitchens bitch", age: "23" },
  { name: "Charlie", role: "Bossman", age: "42" },
  { name: "Elefant", role: "bossMan", age: "12" },
];

function initApp() {

    // Sortering
  users.sort(sortByName);
  console.log(users);

  users.sort(sortReverse);
  console.log(users);

  users.sort(sortByAge);
  console.log(users);

//   filter
  const role = users.filter((user) => user.role.toLowerCase().includes("bossman"));
  console.log(role);

  const roles = users.filter((user) => user.role.toUpperCase().includes("BOSSMAN"));
  console.log(roles);

  const name = users.filter((user) => user.name.includes("Yousra"));
  console.log(name);
users.sort(sortByAgeAgain);
console.log(users)
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function sortReverse(a, b) {
  return b.name.localeCompare(a.name);
}

function sortByAge(a, b) {
  return b.age - a.age;
}

function sortByAgeAgain(a, b) {
return Number(a.age) - Number(b.age);
}

