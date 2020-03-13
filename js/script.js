// variabled
var myHeaders, image, x, h, m, s, today

// käivita funktsioonid (piltide allalaadimine ja reaalaja näitamine)
function startFunctions() {
    setInterval(DownloadImage, 250);
    showTime();
    //jquery api-de jaoks
    $(document).ready(function startAPI() {
        const openweathermapAPI = "http://api.openweathermap.org/data/2.5/weather?q=tartu&appid=bc8e99bcfa56459251da8618f258d152&units=metric";
        const covidAPI = "https://covid19.mathdro.id/api";
        const covidAPI_estonia = "https://covid19.mathdro.id/api/countries/estonia";
        
        $.getJSON(openweathermapAPI)
            .then(function(result) {
                console.log(result);    
                var celsius, city, feelslike
                celsius = result.main.temp;
                city = result.name;
                feelslike = result.main.feels_like;
                document.getElementById("city").innerHTML = `${city}`;
                document.getElementById("celsius").innerHTML = `Temperatuur: ${celsius} C`; 
                document.getElementById("feelslike").innerHTML = `Tundub nagu: ${feelslike} C`
        })

        $.getJSON(covidAPI)
            .then(function(result) {
                console.log(result);
                var confirmed, recovered, dead;
                confirmed = result.confirmed.value;
                recovered = result.recovered.value;
                dead = result.deaths.value;

                document.getElementById("covid19-worldwide-confirmed").innerHTML = `Nakatunuid: ${confirmed}`
                document.getElementById("covid19-worldwide-recovered").innerHTML = `Taastunud: ${recovered}`
                document.getElementById("covid19-worldwide-dead").innerHTML = `Surnud: ${dead}`
                })
        
        $.getJSON(covidAPI_estonia)
            .then(function(result) {
                console.log(result);
                var estonia_confirmed, estonia_recovered, estonia_dead;
                estonia_confirmed = result.confirmed.value;
                estonia_recovered = result.recovered.value;
                estonia_dead = result.deaths.value;

                document.getElementById("covid19-estonia-confirmed").innerHTML = `Nakatunuid: ${estonia_confirmed}`
                document.getElementById("covid19-estonia-recovered").innerHTML = `Taastunud: ${estonia_recovered}`
                document.getElementById("covid19-estonia-dead").innerHTML = `Surnuid: ${estonia_dead}`
            })

        setTimeout(startAPI, 180000);        
    });
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

    setTimeout(showTime, 1000);
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}