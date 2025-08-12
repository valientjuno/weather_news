const apiKey = "bc805f89e83cdacb25b45ea6feb8b0ee"; // Replace with your actual API key
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
    let weather = data;
    console.log("Weather data:", data);

    document.getElementById("current-temp").textContent = weather.main.temp;
    document.getElementById("current-windChill").textContent =
      weather.main.feels_like;
    document.getElementById("current-humid").textContent =
      weather.main.humidity;
    document.getElementById("current-windSpeed").textContent =
      weather.wind.speed;
  })

  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
