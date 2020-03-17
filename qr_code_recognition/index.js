let video = document.getElementById('video');
let snap = document.getElementById('snap');
let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

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
    const code = jsQR(imageData.data, 640, 480, {});
    if (code) {
        console.log("QR найден", code.data);
    } else {
        console.log("QR не найден");
    }
});
