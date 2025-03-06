import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Search = () => {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=ea4f53853e4a43cf8965fc11c2579e62`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.log(err));
  }, [query]);

  // Limit to 6 articles
  const limitedArticles = articles.slice(0, 6);

  return (
    <>
    <Link to="/home" className="bg-primary rounded text-white text-decoration-none">
      Home
    </Link>
    <div className="container mt-4">
      <h2>Results for "{query}"</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {limitedArticles.length > 0 ? (
          limitedArticles.map((article, index) => (
            <div key={index} className="card m-2 p-3" style={{ width: "18rem" }}>
              <img src={article.urlToImage} className="card-img-top" alt="news" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-5">Loading...</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Search;
