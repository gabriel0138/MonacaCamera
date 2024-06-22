document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(navigator.camera);
}

function capturePhoto() {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE
    };

    navigator.camera.getPicture(onPhotoSuccess, onPhotoFail, options);
}

function onPhotoSuccess(imageURI) {
    var photo = document.getElementById('photo');
    photo.style.display = 'block';
    photo.src = imageURI;
}

function onPhotoFail(message) {
    console.error('Falha ao capturar imagem: ' + message);
}
