import React from "react";
import "./movie-list.scss";
import Movie from "../movie/Movie";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

const MovieList = () => {
  const movies = [
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "1",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "7",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "6",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "5",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "3",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "2",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return (
    <div className="movies">
      <h5>39 movies found</h5>
      <div className="movies-all">
        {movies.map((movie) => (
          <ErrorBoundary key={movie.id}>
            <Movie movie={movie} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
