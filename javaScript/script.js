var day = ["sunday", "Monday", "Tuesdat", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector('.button').onclick = function () {
    const city = document.querySelector("input").value;
    const WATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;
    fetch(WATHER_API).then((res) => {
        res.json().then((data) => {
            document.querySelector(".wrapper").style.backgroundImage = `url(imges/i1000.png)`;

            document.querySelector('h1').innerText = data.current.temp_c + "°";
            document.querySelector('h2').innerText = data.location.name;
            document.querySelector("h3").innerText = data.location.localtime;
            document.querySelector("h5").innerText = day[data.current.is_day];


            document.querySelector('.text').innerHTML = data.current.condition.text;
            document.querySelector(".icon").src = "https:" + data.current.condition.icon;
            document.querySelector(".cloud").innerHTML = data.current.cloud + "%";
            document.querySelector(".hum").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";

            console.log(data);

        });
    });
}

var day = ["sunday", "Monday", "Tuesdat", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector('.button').onclick = function () {
    const city = document.querySelector("input").value;
    const WATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;
    var img = ["sunny.png", "cloudy.png", "windy.png", "light-rain.png", "fog.png", "rain.png", "light-snow.png", "heavy-snow.png", "sleet.png", "thunder.png", "blizzard.png", "default.png"];
    fetch(WATHER_API).then((res) => {
        res.json().then((data) => {
            let code = data.current.condition.code;

            if (data.current.condition.code == 1000 || data.current.condition.code == 1003) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/sunny.png)";
            }
            else if (data.current.condition.code == 1006 || data.current.condition.code == 1009) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/cloudy.png)";
            }
            else if (data.current.condition.code == 1012 || data.current.condition.code == 1015 || data.current.condition.code == 1018 || data.current.condition.code == 1021 || data.current.condition.code == 1024 || data.current.condition.code == 1027) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/windy.png)";
            }
            else if (data.current.condition.code == 1030 || data.current.condition.code == 1033 || data.current.condition.code == 1036 || data.current.condition.code == 1039 || data.current.condition.code == 1042 || data.current.condition.code == 1045 || data.current.condition.code == 1048 || data.current.condition.code == 1135 || data.current.condition.code == 1147) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/fog.png)";
            }
            else if (data.current.condition.code == 1063 || data.current.condition.code == 1150 || data.current.condition.code == 1153) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/light-rain.png)";
            }
            else if (data.current.condition.code == 1180 || data.current.condition.code == 1183 || data.current.condition.code == 1186 || data.current.condition.code == 1189 || data.current.condition.code == 1192 || data.current.condition.code == 1195 || data.current.condition.code == 1240 || data.current.condition.code == 1243 || data.current.condition.code == 1246) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/rain.png)";
            }
            else if (data.current.condition.code == 1066 || data.current.condition.code == 1114 || data.current.condition.code == 1117 || data.current.condition.code == 1210 || data.current.condition.code == 1213) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/light-snow.png)";
            }
            else if (data.current.condition.code == 1216 || data.current.condition.code == 1219 || data.current.condition.code == 1222 || data.current.condition.code == 1225 || data.current.condition.code == 1255 || data.current.condition.code == 1258) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/heavy-snow.png)";
            }
            else if (data.current.condition.code == 1069 || data.current.condition.code == 1072 || data.current.condition.code == 1168 || data.current.condition.code == 1171 || data.current.condition.code == 1198 || data.current.condition.code == 1201 || data.current.condition.code == 1204 || data.current.condition.code == 1207 || data.current.condition.code == 1237 || data.current.condition.code == 1249 || data.current.condition.code == 1252 || data.current.condition.code == 1261 || data.current.condition.code == 1264) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/sleet.png)";
            }
            else if (data.current.condition.code == 1087 || data.current.condition.code == 1273 || data.current.condition.code == 1276 || data.current.condition.code == 1279 || data.current.condition.code == 1282) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/thunder.png)";
            }
            else if (data.current.condition.code == 1114 || data.current.condition.code == 1117) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/blizzard.png)";
            }
            else {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/default.png)";
            }
            document.querySelector('h1').innerText = data.current.temp_c + "°";
            document.querySelector('h2').innerText = data.location.name;
            document.querySelector("h3").innerText = data.location.localtime;
            document.querySelector("h5").innerText = day[data.current.is_day];


            document.querySelector('.text').innerHTML = data.current.condition.text;
            document.querySelector(".icon").src = "https:" + data.current.condition.icon;
            document.querySelector(".cloud").innerHTML = data.current.cloud + "%";
            document.querySelector(".hum").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";

            // console.log(data);

        });
    });
}

  const input = document.querySelector("input");
            const cities = document.querySelectorAll(".rightPart .city p");

            for (const city of cities) {
                city.onclick = function () {
                    input.value = this.innerText;

                      document.querySelector(".button").click();
                };
            }
var day = ["sunday", "Monday", "Tuesdat", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector('.button').onclick = function () {

   

    const city = document.querySelector("input").value;
    const WATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;
    var img = ["sunny.png", "cloudy.png", "windy.png", "light-rain.png", "fog.png", "rain.png", "light-snow.png", "heavy-snow.png", "sleet.png", "thunder.png", "blizzard.png", "default.png"];
    fetch(WATHER_API).then((res) => {
        res.json().then((data) => {
           

            if (data.current.condition.code == 1000 || data.current.condition.code == 1003) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/sunny.png)";
            }
            else if (data.current.condition.code == 1006 || data.current.condition.code == 1009) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/cloudy.png)";
            }
            else if (data.current.condition.code == 1012 || data.current.condition.code == 1015 || data.current.condition.code == 1018 || data.current.condition.code == 1021 || data.current.condition.code == 1024 || data.current.condition.code == 1027) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/windy.png)";
            }
            else if (data.current.condition.code == 1030 || data.current.condition.code == 1033 || data.current.condition.code == 1036 || data.current.condition.code == 1039 || data.current.condition.code == 1042 || data.current.condition.code == 1045 || data.current.condition.code == 1048 || data.current.condition.code == 1135 || data.current.condition.code == 1147) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/fog.png)";
            }
            else if (data.current.condition.code == 1063 || data.current.condition.code == 1150 || data.current.condition.code == 1153) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/light-rain.png)";
            }
            else if (data.current.condition.code == 1180 || data.current.condition.code == 1183 || data.current.condition.code == 1186 || data.current.condition.code == 1189 || data.current.condition.code == 1192 || data.current.condition.code == 1195 || data.current.condition.code == 1240 || data.current.condition.code == 1243 || data.current.condition.code == 1246) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/rain.png)";
            }
            else if (data.current.condition.code == 1066 || data.current.condition.code == 1114 || data.current.condition.code == 1117 || data.current.condition.code == 1210 || data.current.condition.code == 1213) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/light-snow.png)";
            }
            else if (data.current.condition.code == 1216 || data.current.condition.code == 1219 || data.current.condition.code == 1222 || data.current.condition.code == 1225 || data.current.condition.code == 1255 || data.current.condition.code == 1258) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/heavy-snow.png)";
            }
            else if (data.current.condition.code == 1069 || data.current.condition.code == 1072 || data.current.condition.code == 1168 || data.current.condition.code == 1171 || data.current.condition.code == 1198 || data.current.condition.code == 1201 || data.current.condition.code == 1204 || data.current.condition.code == 1207 || data.current.condition.code == 1237 || data.current.condition.code == 1249 || data.current.condition.code == 1252 || data.current.condition.code == 1261 || data.current.condition.code == 1264) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/sleet.png)";
            }
            else if (data.current.condition.code == 1087 || data.current.condition.code == 1273 || data.current.condition.code == 1276 || data.current.condition.code == 1279 || data.current.condition.code == 1282) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/thunder.png)";
            }
            else if (data.current.condition.code == 1114 || data.current.condition.code == 1117) {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/blizzard.png)";
            }
            else {
                document.querySelector(".wrapper").style.backgroundImage = "url(imges/default.png)";
            }
            document.querySelector('h1').innerText = data.current.temp_c + "°";
            document.querySelector('h2').innerText = data.location.name;
            document.querySelector("h3").innerText = data.location.localtime;
            document.querySelector("h5").innerText = day[data.current.is_day];


            document.querySelector('.text').innerHTML = data.current.condition.text;
            document.querySelector(".icon").src = "https:" + data.current.condition.icon;
            document.querySelector(".cloud").innerHTML = data.current.cloud + "%";
            document.querySelector(".hum").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";

            // console.log(data);

        });
    });
}



