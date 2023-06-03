"use strict";

window.addEventListener("load", start);

let users = [];

let numberOfAdmin = 0;
let numberOfUser = 0;
let numberOfGuest = 0;

// DEL 1
async function start() {
  users = await getUsers();
  console.log(users);
  showUsers(users);
  countUsers(users);
  countRoles();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  console.log(data);
  return data;
}

// DEL 2

function showUsers(users) {
  for (const user of users) {
    document.querySelector("#userlist").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
<li>${user.name}</li>
<li>${user.role}</li>
<li>${user.active}</li>
<li>${user.id}</li>
<br>
`
    );
  }
}

function countUsers() {
  for (const user of users) {
    if (user.role === "admin") {
      numberOfAdmin = numberOfAdmin + 1;
    } else if (user.role === "user") {
      numberOfUser = numberOfUser + 1;
    } else if (user.role === "guest") {
      numberOfGuest = numberOfGuest + 1;
    }
  }
  console.log(numberOfAdmin, numberOfUser, numberOfGuest);
}

// DEL 3
function countRoles() {
  document.querySelector("#admin-count").textContent = numberOfAdmin;
  document.querySelector("#guest-count").textContent = numberOfGuest;
  document.querySelector("#user-count").textContent = numberOfUser;
}
