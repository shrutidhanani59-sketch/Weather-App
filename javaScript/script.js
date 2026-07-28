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
var img = ["i1000.png" , "i1003.png" ,"i1006.png" ,"i1009.png" ,"i1012.png" ,"i1015.png" ,"i1018.png" ,"i1021.png" ,"i1024.png" ,"i1027.png" ,"i1030.png" ,"i1033.png" ,"i1036.png" ,"i1039.png" ,"i1042.png" ,"i1045.png" ,"i1048.png" ,"i1063.png" ,"i1066.png" ,"i1069.png" ,"i1072.png" ,"i1087.png" ,"i1000.png" ,"i1114.png" ,"i1117.png" ,"i1135.png" ,"i1147.png" ,"i1150.png" ,"i1153.png" ,"i1168.png" ,"i1171.png" ,"i1180.png" ,"i1183.png" ,"i1186.png" ,"i1189.png" ,"i1192.png" ,"i1195.png" ,"i1198.png" ,"i1201.png" ,"i1204.png" ,"i1207.png" ,"i1210.png" ,"i1213.png" ,"i1216.png" ,"i1219.png" ,"i1222.png" ,"i1225.png" ,"i1237.png" ,"i1240.png" ,"i1243.png" ,"i1246.png" ,"i1249.png" ,"i1252.png" ,"i1255.png" ,"i1258.png" ,"i1261.png" ,"i1264.png" ,"i1273.png" ,"i1276.png" ,  "i1279.png" , "i1282.png" ,];
fetch(WATHER_API).then((res) => {
    res.json().then((data) => {
        if (data.current.condition.code == 1000) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[0]})`;
        }
        else if (data.current.condition.code == 1003) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[1]})`;
        }
        else if (data.current.condition.code == 1006) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[2]})`;
        }
        else if (data.current.condition.code == 1009) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[3]})`;
        }
        else if (data.current.condition.code == 1012) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[4]})`;
        }
        else if (data.current.condition.code == 1015) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[5]})`;
        }
        else if (data.current.condition.code == 1018) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[6]})`;
        }
        else if (data.current.condition.code == 1021) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[7]})`;
        }
        else if (data.current.condition.code == 1024) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[8]})`;
        }
        else if (data.current.condition.code == 1027) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[9]})`;
        }
        else if (data.current.condition.code == 1030) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[10]})`;
        }
        else if (data.current.condition.code == 1033) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[11]})`;
        }
        else if (data.current.condition.code == 1036) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[12]})`;
        }
        else if (data.current.condition.code == 1039) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[13]})`;
        }
        else if (data.current.condition.code == 1042) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[14]})`;
        }
        else if (data.current.condition.code == 1045) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[15]})`;
        }
        else if (data.current.condition.code == 1048) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[16]})`;
        }
        else if (data.current.condition.code == 1063) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[17]})`;
        }
        else if (data.current.condition.code == 1066) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[18]})`;
        }
        else if (data.current.condition.code == 1069) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[19]})`;
        }
        else if (data.current.condition.code == 1072) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[20]})`;
        }
        else if (data.current.condition.code == 1082) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[21]})`;
        }
        else if (data.current.condition.code == 1087) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[22]})`;
        }
        else if (data.current.condition.code == 1114) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[23]})`;
        }
        else if (data.current.condition.code == 1117) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[24]})`;
        }
        else if (data.current.condition.code == 1135) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[25]})`;
        }
        else if (data.current.condition.code == 1147) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[26]})`;
        }
        else if (data.current.condition.code == 1150) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[27]})`;
        }
        else if (data.current.condition.code == 1153) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[28]})`;
        }
        else if (data.current.condition.code == 1168) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[29]})`;
        }
        else if (data.current.condition.code == 1171) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[30]})`;
        }
        else if (data.current.condition.code == 1180) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[31]})`;
        }
        else if (data.current.condition.code == 1183) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[32]})`;
        }
        else if (data.current.condition.code == 1186) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[33]})`;
        }
        else if (data.current.condition.code == 1189) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[34]})`;
        }
        else if (data.current.condition.code == 1192) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[35]})`;
        }
        else if (data.current.condition.code == 1195) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[36]})`;
        }
        else if (data.current.condition.code == 1198) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[37]})`;
        }
        else if (data.current.condition.code == 1201) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[38]})`;
        }
        else if (data.current.condition.code == 1204) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[39]})`;
        }
        else if (data.current.condition.code == 1207) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[40]})`;
        }
        else if (data.current.condition.code == 1210) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[41]})`;
        }
        else if (data.current.condition.code == 1213) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[42]})`;
        }
        else if (data.current.condition.code == 1216) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[43]})`;
        }
        else if (data.current.condition.code == 1219) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[44]})`;
        }
        else if (data.current.condition.code == 1222) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[45]})`;
        }
        else if (data.current.condition.code == 1225) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[46]})`;
        }
        else if (data.current.condition.code == 1237) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[47]})`;
        }
        else if (data.current.condition.code == 1240) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[48]})`;
        }
        else if (data.current.condition.code == 1243) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[49]})`;
        }
        else if (data.current.condition.code == 1246) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[50]})`;
        }
        else if (data.current.condition.code == 1249) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[51]})`;
        }
        else if (data.current.condition.code == 1253) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[52]})`;
        }
        else if (data.current.condition.code == 1255) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[53]})`;
        }
        else if (data.current.condition.code == 1258) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[54]})`;
        }
        else if (data.current.condition.code == 1261) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[55]})`;
        }
        else if (data.current.condition.code == 1264) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[56]})`;
        }
        else if (data.current.condition.code == 1273) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[57]})`;
        }
        else if (data.current.condition.code == 1276) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[58]})`;
        }
        else if (data.current.condition.code == 1279) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[59]})`;
        }
        else if (data.current.condition.code == 1282) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[60]})`;
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

        console.log(data);

    });
});
}
var day = ["sunday", "Monday", "Tuesdat", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector('.button').onclick = function () {
const city = document.querySelector("input").value;
const WATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;
var img = ["i1000.png" , "i1003.png" ,"i1006.png" ,"i1009.png" ,"i1012.png" ,"i1015.png" ,"i1018.png" ,"i1021.png" ,"i1024.png" ,"i1027.png" ,"i1030.png" ,"i1033.png" ,"i1036.png" ,"i1039.png" ,"i1042.png" ,"i1045.png" ,"i1048.png" ,"i1063.png" ,"i1066.png" ,"i1069.png" ,"i1072.png" ,"i1087.png" ,"i1000.png" ,"i1114.png" ,"i1117.png" ,"i1135.png" ,"i1147.png" ,"i1150.png" ,"i1153.png" ,"i1168.png" ,"i1171.png" ,"i1180.png" ,"i1183.png" ,"i1186.png" ,"i1189.png" ,"i1192.png" ,"i1195.png" ,"i1198.png" ,"i1201.png" ,"i1204.png" ,"i1207.png" ,"i1210.png" ,"i1213.png" ,"i1216.png" ,"i1219.png" ,"i1222.png" ,"i1225.png" ,"i1237.png" ,"i1240.png" ,"i1243.png" ,"i1246.png" ,"i1249.png" ,"i1252.png" ,"i1255.png" ,"i1258.png" ,"i1261.png" ,"i1264.png" ,"i1273.png" ,"i1276.png" ,  "i1279.png" , "i1282.png" ,];
fetch(WATHER_API).then((res) => {
    res.json().then((data) => {
        document.querySelector('.city');

        if (data.current.condition.code == 1000) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[0]})`;
        }
        else if (data.current.condition.code == 1003) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[1]})`;
        }
        else if (data.current.condition.code == 1006) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[2]})`;
        }
        else if (data.current.condition.code == 1009) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[3]})`;
        }
        else if (data.current.condition.code == 1012) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[4]})`;
        }
        else if (data.current.condition.code == 1015) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[5]})`;
        }
        else if (data.current.condition.code == 1018) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[6]})`;
        }
        else if (data.current.condition.code == 1021) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[7]})`;
        }
        else if (data.current.condition.code == 1024) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[8]})`;
        }
        else if (data.current.condition.code == 1027) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[9]})`;
        }
        else if (data.current.condition.code == 1030) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[10]})`;
        }
        else if (data.current.condition.code == 1033) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[11]})`;
        }
        else if (data.current.condition.code == 1036) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[12]})`;
        }
        else if (data.current.condition.code == 1039) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[13]})`;
        }
        else if (data.current.condition.code == 1042) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[14]})`;
        }
        else if (data.current.condition.code == 1045) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[15]})`;
        }
        else if (data.current.condition.code == 1048) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[16]})`;
        }
        else if (data.current.condition.code == 1063) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[17]})`;
        }
        else if (data.current.condition.code == 1066) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[18]})`;
        }
        else if (data.current.condition.code == 1069) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[19]})`;
        }
        else if (data.current.condition.code == 1072) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[20]})`;
        }
        else if (data.current.condition.code == 1082) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[21]})`;
        }
        else if (data.current.condition.code == 1087) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[22]})`;
        }
        else if (data.current.condition.code == 1114) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[23]})`;
        }
        else if (data.current.condition.code == 1117) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[24]})`;
        }
        else if (data.current.condition.code == 1135) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[25]})`;
        }
        else if (data.current.condition.code == 1147) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[26]})`;
        }
        else if (data.current.condition.code == 1150) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[27]})`;
        }
        else if (data.current.condition.code == 1153) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[28]})`;
        }
        else if (data.current.condition.code == 1168) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[29]})`;
        }
        else if (data.current.condition.code == 1171) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[30]})`;
        }
        else if (data.current.condition.code == 1180) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[31]})`;
        }
        else if (data.current.condition.code == 1183) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[32]})`;
        }
        else if (data.current.condition.code == 1186) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[33]})`;
        }
        else if (data.current.condition.code == 1189) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[34]})`;
        }
        else if (data.current.condition.code == 1192) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[35]})`;
        }
        else if (data.current.condition.code == 1195) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[36]})`;
        }
        else if (data.current.condition.code == 1198) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[37]})`;
        }
        else if (data.current.condition.code == 1201) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[38]})`;
        }
        else if (data.current.condition.code == 1204) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[39]})`;
        }
        else if (data.current.condition.code == 1207) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[40]})`;
        }
        else if (data.current.condition.code == 1210) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[41]})`;
        }
        else if (data.current.condition.code == 1213) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[42]})`;
        }
        else if (data.current.condition.code == 1216) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[43]})`;
        }
        else if (data.current.condition.code == 1219) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[44]})`;
        }
        else if (data.current.condition.code == 1222) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[45]})`;
        }
        else if (data.current.condition.code == 1225) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[46]})`;
        }
        else if (data.current.condition.code == 1237) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[47]})`;
        }
        else if (data.current.condition.code == 1240) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[48]})`;
        }
        else if (data.current.condition.code == 1243) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[49]})`;
        }
        else if (data.current.condition.code == 1246) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[50]})`;
        }
        else if (data.current.condition.code == 1249) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[51]})`;
        }
        else if (data.current.condition.code == 1253) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[52]})`;
        }
        else if (data.current.condition.code == 1255) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[53]})`;
        }
        else if (data.current.condition.code == 1258) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[54]})`;
        }
        else if (data.current.condition.code == 1261) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[55]})`;
        }
        else if (data.current.condition.code == 1264) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[56]})`;
        }
        else if (data.current.condition.code == 1273) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[57]})`;
        }
        else if (data.current.condition.code == 1276) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[58]})`;
        }
        else if (data.current.condition.code == 1279) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[59]})`;
        }
        else if (data.current.condition.code == 1282) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[60]})`;
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

        console.log(data);

    });
});
}