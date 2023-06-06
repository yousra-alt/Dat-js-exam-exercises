"use strict";

let songs = [
  { artist: "Taylor Swift", title: "Blank space", duration: "4:33", counter: 0 },
  { artist: "Beastie Boys", title: "Sabotage", duration: "3:02", counter: 0 },
  { artist: "Skrillex", title: "Bangarang", duration: "3:35", counter: 0 },
  { artist: "Wolfgang Amadeus Mozart", title: "Eine kleine Nachtmusik", duration: "5:45", counter: 0 },
  { artist: "Coldplay", title: "Yellow", duration: "4:27", counter: 0 },
  { artist: "Metallica", title: "Enter Sandman", duration: "5:32", counter: 0 },
];

window.addEventListener("load", initApp);

function initApp() {
  showSongs(songs);
}

function showSongs(songs) {
  for (const song of songs) {
    document.querySelector("#songlist").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
<li>${song.artist}</li>
<li>${song.title}</li>
<li>${song.duration}</li>
<button>upvote</button>
`
    );

    document.querySelector("#songlist button:last-child").addEventListener("click", () => upvoteSong(song));
  }
}

function upvoteSong(song) {
  song.counter++;
  console.log(song.counter);

  document.querySelector("#songlist").innerHTML = "";
  
}
// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
// 2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.
