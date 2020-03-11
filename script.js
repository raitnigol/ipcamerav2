// käivita taimer
function startFunctions() {
    // downloadi uus pilt iga 300ms tagant
    setInterval(DownloadImage, 200);
    // käivita kellaaja skript
    showTime()
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

function showTime() {
    var today = new Date();
    h = pad2(today.getHours());
    m = pad2(today.getMinutes());
    s = pad2(today.getSeconds());
    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`

    setTimeout(showTime, 500);
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}