"use strict";



window.addEventListener("load", start);

let songs = [];

async function start() {
    songs = await getSongs();

    console.log(songs)
    showSongs()
}


async function getSongs() {
    const response = await fetch("playlist.json");
    const playlist = response.json();
    return playlist;
}


function showSongs() {
 for (const song of songs) {

 const html = /*html*/ `
<li>${song.title}</li> 
<button>Remove</button>
`;

document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
// document.querySelector("#songlist li:last-child button").addEventListener("click", () =>removeSong(song));

}
}

function removeSong () {

console.log(songToRemove);
songs = songs.filter(song => song.title!= songToRemove.title)
}



