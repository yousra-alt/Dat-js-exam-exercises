"use strict"

window.addEventListener("load", initApp);

let animals = []
function initApp() {
createAnimals()
}

// DEL 1
function createAnimals(name, type, age) {

const animal = {
name: name,
type: type,
age: age,

}
animals.push(animal);
console.log(animals);
}

const haiwans = [
{
name: "adam", 
age: 1,
type: "kalb",
},

{name: "adamé",
age: 99,
type: "notMytype",
},

{name: "bean",
age: -10,
type: "dead",}
]

console.log(haiwans);