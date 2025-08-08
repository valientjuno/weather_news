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

const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.summary");
let para = document.createElement("p");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      // console.log(business[i].name);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.
      console.log(business);
      // Creates card and places business name in h2 element
      let card = document.createElement("section");
      // Adds a classname to the section element above
      card.className = "card";
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);
      document.querySelector("div.summary").appendChild(card);

      // Create the image location, you can look up how to add image using javascript

      let img = document.createElement("img");

      img.src = business[i].imageurl;
      img.alt = business[i].name;
      img.className = "card-img";
      card.appendChild(img);

      // document.querySelector("business-card.cards").appendChild(card);

      let p = document.createElement("p");
      p.textContent = business[i].address;
      card.appendChild(p);

      // Include a business Description
      let h3 = document.createElement("h3");
      h3.textContent = business[i].description;
      card.appendChild(h3);
      // document.querySelector("business-card.cards").appendChild(card);
    }
  });
