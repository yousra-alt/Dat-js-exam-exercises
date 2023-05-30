"use strict";

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#btn-knap").addEventListener("click", buttonClicked);
    hideTextClickec()
}

function buttonClicked () {
console.log("Det virker");
}

function showText () {
document.querySelector("#result_failure").classList.add("show");

}

function hideTextClickec () {
document.querySelector("#result_failure").classList.add("hide");
document.querySelector("#result_succes").classList.add("hide");


}