import React, { useState, useEffect } from "react";
import "./search.scss";

const Search = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    if (movie.length > 2) {
      console.log("ищем", movie);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movie, "отправлена форма");
  };

  return (
    <div className="search">
      <div className="search-background"></div>
      <div className="search-head">
        <span className="search-head-home">netflixroulette</span>
        <button className="search-head-add">+ add movie</button>
      </div>
      <h1 className="search-heading">FIND YOUR MOViE</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-form-input"
          type="text"
          placeholder="What do you want to watch?"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <button type="submit" className="search-form-button">
          search
        </button>
      </form>
    </div>
  );
};
export default Search;
