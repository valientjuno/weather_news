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
  "https://api.openweathermap.org/data/2.5/weather?lat=40.530&lon=112.2983&appid=bc805f89e83cdacb25b45ea6feb8b0ee";
let weatherSummary = document.querySelector("div.summary");
let para = document.createElement("p");

fetch(api)
  .then((response) => response.json())
  .then((jsObject) => {
    let weather = jsObject.weather;
    console.log(weather);
    for (let i = 0; i < weather.length; i++) {
      // console.log(business[i].name);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // // Creates card and places business name in h2 element
      let citySummary = document.createElement("section");
      // Adds a classname to the section element above
      citySummary.className = "Tooele";
      let h2 = document.createElement("h2");
      h2.textContent = weather;
      citySummary.appendChild(h2);
      document.querySelector("div.summary").appendChild(citySummary);

      // Create the image location, you can look up how to add image using javascript

      // Include a business location

      // Include a business Description
    }
  });
