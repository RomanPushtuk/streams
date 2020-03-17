importScripts("scripts/jsqr/dist/jsQR.js");

self.addEventListener('message', function(event) {
    let code = jsQR(...event.data);

    self.postMessage(code);
}, false);