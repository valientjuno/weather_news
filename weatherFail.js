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

// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?q=Tooele&appid=bc805f89e83cdacb25b45ea6feb8b0ee";
// const city = "Tooele";
// let weatherSummary = document.querySelector("div.summary");
// let para = document.createElement("p");

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     let weather = jsObject.weather;
//     console.log(weather[0]);
//     for (let i = 0; i < weather.length; i++) {
//       let citySummary = document.createElement("section");
//       citySummary.className = "Tooele";
//       let p = document.createElement("p");
//       p.textContent = weather;
//       citySummary.appendChild(p);
//       document.querySelector("div.summary").appendChild(citySummary);

//       //
//       let main = document.createElement("p");
//       main.textContent = weather[0].main;
//       citySummary.appendChild(main);
//       //
//       document.querySelector("div.summary").appendChild(citySummary);
//       let description = document.createElement("p");
//       description.textContent = weather[0].description;
//       citySummary.appendChild(description);
//     }
//   });

const apiKey = "Ybc805f89e83cdacb25b45ea6feb8b0ee"; // Replace with your actual API key
const city = "Tooele"; // Example city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=bc805f89e83cdacb25b45ea6feb8b0ee`;

fetch(apiUrl)
  .then((response) => {

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);

    }

    return response.json();
  })
  .then((data) => {
    console.log("Weather data:", data);

    const temperature = data.main.temp;
    console.log(`Temperature in ${city}: ${temperature}°F`);

  })

  .catch((error) => {
    console.error("Error fetching weather data:", error);

  });
