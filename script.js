// Select the image and the audio element
const playImage = document.getElementById("playImage");
const myAudio = document.getElementById("myAudio");

// Add a click event listener to the image
playImage.addEventListener("click", () => {
    if (myAudio.paused) {
        myAudio.play(); // Play the audio
    } else {
        myAudio.pause(); // Pause the audio if already playing
    }
});