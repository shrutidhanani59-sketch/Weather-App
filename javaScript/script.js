var day = ["sunday", "Monday", "Tuesdat", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector('.button').onclick = function () {
    const city = document.querySelector("input").value;
    const WATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;
    fetch(WATHER_API).then((res) => {
        res.json().then((data) => {

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
var img = ["wather1.jpg", "wather2.jpg", "wather3.jpg", "wather4.jpg" , "wather5.jpg" , "wather6.jpg" , "wather7.png" ,"wather8.png" ,"wather9.jpg" , "wather10.jpg" , "wather11.jpg" , "wather12.jpg" , "wather13.jpg" , "wather14.jpg" , "wather15.jpg" , "wather16.jpg" ,"wather17.jpg" ,"wather18.jpg" ,];
fetch(WATHER_API).then((res) => {
    res.json().then((data) => {

        if (data.current.condition.code >= 1000) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[0]})`;
        }
        else if (data.current.condition.code <= 1003) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[1]})`;
        }
        else if (data.current.condition.code <= 1006) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[2]})`;
        }
        else if (data.current.condition.code <= 1009) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[3]})`;
        }
        else if (data.current.condition.code <= 1012) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[4]})`;
        }
        else if (data.current.condition.code <= 1015) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[5]})`;
        }
        else if (data.current.condition.code <= 1018) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[6]})`;
        }
        else if (data.current.condition.code <= 1021) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[7]})`;
        }
        else if (data.current.condition.code <= 1024) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[8]})`;
        }
        else if (data.current.condition.code <= 1027) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[9]})`;
        }
        else if (data.current.condition.code <= 1030) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[10]})`;
        }
        else if (data.current.condition.code <= 1033) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[11]})`;
        }
        else if (data.current.condition.code <= 1036) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[12]})`;
        }
        else if (data.current.condition.code <= 1039) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[13]})`;
        }
        else if (data.current.condition.code <= 1042) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[14]})`;
        }
        else if (data.current.condition.code <= 1045) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[15]})`;
        }
        else if (data.current.condition.code <= 1048) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[16]})`;
        }
        else if (data.current.condition.code <= 1063) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[17]})`;
        }
        else if (data.current.condition.code <= 1066) {
            document.querySelector('.wrapper').style.backgroundImage = `url(imges/${img[18]})`;
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