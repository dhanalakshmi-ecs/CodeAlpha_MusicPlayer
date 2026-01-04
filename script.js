const songs = [
    { title: "Young and beautiful", file: "song1.mp3" },
    { title: "Cinnomon Girl", file: "song2.mp3" },
    { title: "Chemtrails", file: "song3.mp3" }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

loadSong();

function loadSong() {
    title.innerText = songs[currentSong].title;
    audio.src = songs[currentSong].file;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong();
    audio.play();
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});
