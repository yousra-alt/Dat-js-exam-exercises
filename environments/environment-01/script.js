"use strict";

window.addEventListener("load", initApp);

let users = [];

async function initApp() {
  users = await getUsers();
  console.log(users);
//   filtereing. 
  const admin = users.filter((user) => user.role.includes("admin"));
  console.log(admin);
  showUsers(admin);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(users) {
  for (const user of users) {
    document.querySelector("#userlist").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
<p>${user.name}</p>
<p>${user.role}</p>
<p>${user.active}</p>
<br>
`
    );
  }
}
