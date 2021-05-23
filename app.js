
const weatherApi={
    key:"56087a2d2390c7c60832119bb0235d4d",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
       
}
//Event Listener on keypress

const searchinputbox=document.getElementById('inputbox')
searchinputbox.addEventListener('keypress' ,(event)=>{
    
    if(event.keyCode==13){
        console.log(searchinputbox.value);
        getweatherreport(searchinputbox.value);
        document.querySelector('.weather-body').style.display="block ";
    }
});

// Get Weather Reports

function getweatherreport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showweatherreport);
}
//Show Weather Report

function showweatherreport(weather){
console.log(weather);
let city=document.getElementById('city');
city.innerText=`${weather.name}, ${weather.sys.country}`;

let temperature=document.getElementById('temp');
temperature.innerHTML=`${ Math.round(weather.main.temp)} &deg;C`;
let minMaxTemp=document.getElementById('minmax');
minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)} &deg;C (min) / ${Math.ceil(weather.main.temp_max)} &deg;C (max) `;
 let weathertype=document.getElementById('weather');
 weathertype.innerText=`${weather.weather[0].main}`;

let date=document.getElementById('date');
let todayDate=new Date();
date.innerText=dateManage(todayDate);

if(weathertype.textContent=='Clear'){
    document.body.style.backgroundImage= "url('Clear1.jpg')";
}else if(weathertype.textContent=='Clouds'){
    document.body.style.backgroundImage= "url('Cloudy.jpg')";
}
else if(weathertype.textContent=='Rain'){
    document.body.style.backgroundImage= "url('rain.jpg')";
}
else if(weathertype.textContent=='Haze'){
    document.body.style.backgroundImage= "url('Cloudy.jpg')";
}
else if(weathertype.textContent=='Snow'){
    document.body.style.backgroundImage= "url('snow.jpg')";
}
else if(weathertype.textContent=='Thunderstorm'){
    document.body.style.backgroundImage= "url('thunder.jpg')";
}
}
//date manage
function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","Novemeber","December"];
     
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date} ${month} (${day}) ${year}`;

}


// 56087a2d2390c7c60832119bb0235d4d

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
