import React, { useState, useEffect } from "react";
import axios from "axios";

const apikey = "ebd02783";
const baseurl = "http://www.omdbapi.com/";

const Movie = () => {
  const [movies, setMovies] = useState([]); // Use an array instead of an empty string

  useEffect(() => {
    axios
      .get(`${baseurl}?apikey=${apikey}&s=Batman`) // Corrected template literal
      .then((response) => setMovies(response.data.Search || [])) // Fixed `Search`
      .catch((error) => console.error("Error fetching data:", error)); // Use `.catch()`
  }, []);

  return (
    <>
      <h2>Movie List</h2>
      <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "10px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ minWidth: "200px", textAlign: "center" }}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "150px", height: "220px", borderRadius: "10px" }}
            />
            <p>{movie.Title} ({movie.Year})</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movie;
