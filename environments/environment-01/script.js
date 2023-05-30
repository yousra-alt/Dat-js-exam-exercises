"use strict";

window.addEventListener("load", initApp);

// del 1
let users = [];
// global varibel
async function initApp() {
  users = await getUsers();
  showUsers(users);
  showAdmins(users);
}

// start med getUsers
async function getUsers() {
  const response = await fetch("users.json");

  const data = await response.json();
  return data;
}

//  del 2

function showUsers(users) {
  // looper igennem hver user
  for (const user of users)
    document.querySelector("#userlist").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
<article class="userlist">
<li>${user.name} - active: ${user.active}</li>
</article>
`
    );
}

function getAdmin(users) {
  users.filter((user) => user.admin).forEach(showAdmins); 
  // const results = users.filter(checkRole);

  // function checkRole(user) {
  //   return user.role === "admin";
  // }
  // return results;

}

function showAdmins (users) {
  
   document.querySelector("#admin-count").insertAdjacentHTML(
     "beforeend",
     /*html*/ `
<article class="admin">
<li>${users.admin}</li>
</article>
`
   );
}
