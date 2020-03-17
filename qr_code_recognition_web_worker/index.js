let video = document.getElementById('video');
let snap = document.getElementById('snap');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let worker = new Worker('worker.js');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

snap.addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
    let imageData = context.getImageData(0, 0, 640, 480);
    worker.postMessage([imageData.data, 640, 480, {}]);
});

worker.addEventListener("message", function (event) {
    let code = event.data;

    if (code) {
        console.log("QR найден", code.data);
    } else {
        console.log("QR не найден");
    }
});
