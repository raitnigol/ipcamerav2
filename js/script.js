// variabled
var myHeaders, image, x, h, m, s, today

// käivita funktsioonid (piltide allalaadimine ja reaalaja näitamine)
function startFunctions() {
    setInterval(DownloadImage, 500);
    showTime();
    //jquery api-de jaoks
    $(document).ready(function startAPI() {
        const openweathermapAPI = "http://api.openweathermap.org/data/2.5/weather?q=tartu&appid=bc8e99bcfa56459251da8618f258d152&units=metric";
        const covidAPI = "https://covid19.mathdro.id/api";
        const covidAPI_country = "estonia"; 
        const covidAPI_custom_country = `https://covid19.mathdro.id/api/countries/${covidAPI_country}`;
        
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
        
        $.getJSON(covidAPI_custom_country)
            .then(function(result) {
                console.log(result);
                var custom_confirmed, custom_recovered, custom_dead;
                custom_confirmed = result.confirmed.value;
                custom_recovered = result.recovered.value;
                custom_dead = result.deaths.value;

                document.getElementById("covid19-custom-confirmed").innerHTML = `Nakatunuid: ${custom_confirmed}`
                document.getElementById("covid19-custom-recovered").innerHTML = `Taastunud: ${custom_recovered}`
                document.getElementById("covid19-custom-dead").innerHTML = `Surnuid: ${custom_dead}`
            })
        setTimeout(startAPI, 180000);
        
        function cum() {
        }
        cum();
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