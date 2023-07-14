const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localMediaStream) => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch((err) => console.error("VIDEO NOT FOUND ", err));
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
    console.log(width, height);
}

function takePhoto() {
    // play sound
    snap.currentTime = 0;
    snap.play();

    // data from canvas
    const data = canvas.toDataURL("image/jpeg");
    console.log(data);

    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "ABCD");
    link.innerHTML = `<img src="${data}">`;

    strip.appendChild(link, strip.firstChild);
}
getVideo();

video.addEventListener("canplay", paintToCanvas);
