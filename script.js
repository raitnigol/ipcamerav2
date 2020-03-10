// käivita taimer
function startTimer() {
    // downloadi uus pilt iga 300ms tagant
    setInterval(DownloadImage, 200);
}

// tee uus objekt Headerite jaoks
var myHeaders = new Headers();
myHeaders.set('Cache-Control', 'no-cache');

// lae pildid alla ja käivita stream
function DownloadImage() {
    var image = new Image(),
    x = document.getElementById("jpgFromCamera");

    image.onload = function () {
        x.src = image.src;
    };

    image.src = "http://172.17.15.57/jpg/image.jpg" + "?_=" + (+new Date());
}