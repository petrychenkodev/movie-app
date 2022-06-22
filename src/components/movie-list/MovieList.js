import React from "react";
import "./movie-list.scss";
import Movie from "../movie/Movie";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

const MovieList = ({onMovieClick, movies }) => {
  return (
    <div className="movies">
      <h5>39 movies found</h5>
      <div className="movies-all">
        {movies.map((movie) => (
          <ErrorBoundary key={movie.id}>
            <Movie onMovieClick={onMovieClick} movie={movie} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
