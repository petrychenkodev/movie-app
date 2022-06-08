import React from "react";
import './search.scss'

const Search = () => {
  return (
    <div className="search">
      <div className="search-background"></div>
      <div className="search-head">
        <span className="search-head-home">netflixroulette</span>
        <button className="search-head-add">+ add movie</button>
      </div>
      <h1 className="search-heading">FIND YOUR MOViE</h1>
      <form className="search-form">
        <input
          className="search-form-input"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className="search-form-button">search</button>
      </form>
    </div>
  );
};
export default Search;
