import React from "react";
import "./movie-list.scss";
import Movie from "../movie/Movie";

const MovieList = () => {
  const movies = [
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return (
    <div className="movies">
      <h5>39 movies found</h5>
      <div className="movies-all">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;