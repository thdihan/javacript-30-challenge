// Dom elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const prev_next = player.querySelectorAll(".prev_next");
const rangeInput = player.querySelectorAll(`input[type="range"]`);
const progress__filled = player.querySelector(".progress__filled");

const progress = player.querySelector(".progress");
console.log(progress__filled);
console.dir(progress);
// Functions

function toggleButton(button) {
    toggle.innerText = button;
}
function playVideo() {
    if (video.paused) {
        video.play();
        toggleButton("❚ ❚");
    } else {
        video.pause();
        toggleButton("►");
    }
}

function skip() {
    const skipValue = this.getAttribute("data-skip");
    const skipAmount = parseInt(skipValue);
    video.currentTime += skipAmount;
}

function changeRange() {
    console.log(this.value);
    video[this.name] = this.value;
}

function handleProgress() {
    const parcent = (video.currentTime / video.duration) * 100;
    progress__filled.style.flexBasis = parcent.toString() + "%";
}
function changeProgress(e) {
    const changeValue = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = changeValue;
    console.log(changeValue);
}
// Add EventListener
video.addEventListener("click", playVideo);
toggle.addEventListener("click", playVideo);
prev_next.forEach((button) => button.addEventListener("click", skip));
rangeInput.forEach((range) => range.addEventListener("change", changeRange));

video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", changeProgress);
