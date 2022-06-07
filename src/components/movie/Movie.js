import React from "react";
import "./movie.scss";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.img} alt="img" />
      <h4>{movie.name}</h4>
      <span>{movie.geanre}</span>
      <div>{movie.year}</div>
    </div>
  );
};
export default Movie;
