// const weatherSite = document.getElementById("summary");

// function summary() {
//   const weatherSummary = URl;
// }
// function URL() {
//   let URl = "summary";
//   ("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={weatherSite}");
//   fetch(URL);
//   URL.createObjectURL(
//     stats,
//     summary,
//     current - desc,
//     current - temp,
//     current - windChill,
//     current - humid,
//     currentWindSpeed
//   );
// }

const api =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.53&lon=-110.3&appid=bc805f89e83cdacb25b45ea6feb8b0ee&units=imperial";
let weatherSummary = document.querySelector("div.summary");
let para = document.createElement("p");

fetch(api)
  .then((response) => response.json())
  .then((jsObject) => {
    let weather = jsObject.weather;
    console.log(weather[0]);
    for (let i = 0; i < weather.length; i++) {
      let citySummary = document.createElement("section");
      citySummary.className = "Tooele";
      let p = document.createElement("p");
      p.textContent = weather;
      citySummary.appendChild(p);
      document.querySelector("div.summary").appendChild(citySummary);

      //
      let main = document.createElement("p");
      main.textContent = weather[0].main;
      citySummary.appendChild(main);
      //
      document.querySelector("div.summary").appendChild(citySummary);
      let description = document.createElement("p");
      description.textContent = weather[0].description;
      citySummary.appendChild(description);
    }
  });
