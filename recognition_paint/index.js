let snap = document.getElementById('snap');
let canvas = document.getElementById('canvas');

let signaturePad = new SignaturePad(canvas);

snap.addEventListener('click', function() {
    let data = signaturePad.toDataURL();
    var link = document.createElement("a");
    link.href = data;
    link.download = "signature.png";
    link.click();
});