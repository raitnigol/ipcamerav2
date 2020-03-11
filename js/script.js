// variabled
var myHeaders, image, x, h, m, s, today
// käivita funktsioonid (piltide allalaadimine ja reaalaja näitamine)
function startFunctions() {
    setInterval(DownloadImage, 150);
    showTime();
}

// tee uus objekt Headerite jaoks
myHeaders = new Headers();
myHeaders.set('Cache-Control', 'no-cache');
myHeaders.set('Cache-Control', 'no-store');

// lae pildid alla ja käivita stream
function DownloadImage() {
    image = new Image(),
    x = document.getElementById("jpgFromCamera");
    
    image.onload = function () {
        x.src = image.src;
    };

    image.src = "http://172.17.15.57/jpg/image.jpg" + "?_=" + (+new Date());
}

function showTime() {
    today = new Date();
    h = pad2(today.getHours());
    m = pad2(today.getMinutes());
    s = pad2(today.getSeconds());
    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`

    setTimeout(showTime, 500);
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}