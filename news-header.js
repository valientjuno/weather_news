const newsApiKey = "662fe9fb0054975b5d1bb6c61efdece";
const country = "us";
const category = "technology";

const Url =
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3662fe9fb0054975b5d1bb6c61efdece";

fetch(Url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON response
  })
  .then((data) => {
    console.log(data.articles);

    // Access the news articles
    // Process and display the news data here
  })
  .catch((error) => {
    console.error("Error fetching news:", error);
  });
