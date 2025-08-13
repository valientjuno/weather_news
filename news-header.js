const newsApiKey = "3662fe9fb0054975b5d1bb6c61efdece";

//
async function fetchNews(country = "us", category = "technology") {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3662fe9fb0054975b5d1bb6c61efdece`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

function renderNews(articles, container) {
  container.innerHTML = "";
  if (articles.length === 0) {
    container.innerHTML = "<p>No news articles found.</p>";
    return;
  }

  articles.forEach((article) => {
    const articleEl = document.createElement("div");
    articleEl.className = "news-article";

    articleEl.innerHTML = `
      <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
      ${
        article.urlToImage
          ? `<img src="${article.urlToImage}" alt="News Image" style="max-width:100%;">`
          : ""
      }
      <p>${article.description || ""}</p>
    `;

    container.appendChild(articleEl);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("newsContainer");

  const articles = await fetchNews("us", "technology");
  renderNews(articles, container);
});
