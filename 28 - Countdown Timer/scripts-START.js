let countdown;
const displayTime = document.querySelector(".display__time-left");
const displayEnd = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("button");

const form = document.querySelector('[name="customForm"]');
function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    // console.log({ now, then });
    displayEndTime(then);
    displayTimeLeft(seconds);
    countdown = setInterval(function () {
        let secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) return;
        // console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const time = `${minutes}:${remainingSeconds}`;
    displayTime.innerText = time;
    document.title = time;
    console.log(minutes, remainingSeconds);
}

function displayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const mins = end.getMinutes();

    console.log(hour, mins);
    displayEnd.innerText = `Ends at ${hour > 12 ? hour - 12 : hour}:${mins}`;
}

function setTimer() {
    const seconds = parseInt(this.dataset.time);
    console.log(this.dataset.time);
    timer(seconds);
}

function formInput(e) {
    e.preventDefault();
    const seconds = parseInt(this.minutes.value) * 60;
    timer(seconds);
    console.log(this.minutes.value);
}
buttons.forEach((button) => button.addEventListener("click", setTimer));
form.addEventListener("submit", formInput);
