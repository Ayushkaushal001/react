import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/everything?q=india&apiKey=ea4f53853e4a43cf8965fc11c2579e62")
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const limitedArticles = articles.slice(0, 9);


  
  return (
    <div class="container mt-4">
      <h1 class="text-center">Latest News</h1>
      <div class="d-flex flex-wrap justify-content-center">
        {limitedArticles.length > 0 ? (
          limitedArticles.map((article, index) => (
            <div key={index} class="card m-2 " style={{ width: "18rem" }}>
              <img src={article.urlToImage} class="card-img-top" alt="news" />
              <div class="card-body">
                <h5 class="card-title">{article.title.slice(0, 20)}</h5>
                <p class="card-text">{article.description.slice(0, 50)}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))
        ):(
              <p class = "mt-5">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
