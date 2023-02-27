// collect all of the album cover into a variable
const albumcovers = document.querySelectorAll("#albumart img");
    theAudioEl = document.querySelector('audio'),
    playButton = document.querySelector('#playButton'),
    pauseButton = document.querySelector('#pauseButton'),
    rewindButton = document.querySelector('#rewindButton');

function loadAudio () {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    theAudioEl.src = currentSrc;
    theAudioEl.load();

    // tell the audio element to play
    playAudio();
}

function playAudio() {theAudioEl.play();}
    // let currentSrc = `audio/${this.dataset.trackref}.mp3`;

    // let the new audio source
    // theAudioEl.src = currentSrc;

    // load the new audio source
    // theAudioEl.load();

    // play the new audio source
    // theAudioEl.play();

    // debug (test) test your code at this point before you add anything else
    // theAudioEl.play();
// }

function restartAudio() {theAudioEl.currentTime = 0;}
function pauseAdio() {theAudioEl.pause();}


// add event handling to the album cover (listen for active event)
albumcovers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling for the custom controls

playButton.addEventListener('click', playAudio);
rewindButton.addEventListener('click', restartAudio);
pauseButton.addEventListener('click', pauseAdio);
