var day = ["sunday" , "Monday" , "Tuesdat", "Wednesday" , "Thursday" , "Friday" , "Saturday"];
document.querySelector('.button').onclick = function()
{
    const city = document.querySelector("input").value;
const WATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;

fetch(WATHER_API).then((res)=>{
    res.json().then((data)=>{
        document.querySelector('h1').innerText = data.current.temp_c+"°";
        document.querySelector('h2').innerText = data.location.name;
          document.querySelector("h3").innerText = data.location.localtime;
          document.querySelector("h5").innerText = day[data.current.is_day];


          document.querySelector('.text').innerHTML = data.current.condition.text;
          document.querySelector(".icon").src = "https:"+data.current.condition.icon;
          document.querySelector(".cloud").innerHTML = data.current.cloud+"%";
          document.querySelector(".hum").innerHTML = data.current.humidity+"%";
          document.querySelector(".wind").innerHTML = data.current.wind_kph+"Km/h";
        
        console.log(data);
        
    });
});
}