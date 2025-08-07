let URl = "`https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid={weatherSite}`";
fetch(URL)
.then((response) => response.json())
.then((jsobject) => jsobject.weather);
for(let i=0, i <weather.length; i++){
    console.log(weather);
}
