"use strict";

window.addEventListener("load", start);


let songs = [];
function start() {

}


function createSong(artist, title, duation) {
    const newSong = {
        artist: artist,
        title: title,
        duration: duation,
    }
    console.log(newSong)
    // *laver objekt
}


function showSongs(songs) {
document.querySelector("#song-list").innerHTML="";


}