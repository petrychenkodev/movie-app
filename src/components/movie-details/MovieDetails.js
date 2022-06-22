import React, { useEffect, useCallback } from "react";
import "./movie-details.scss";

const MovieDetails = ({ movie, showSearch }) => {
  useEffect(() => {
    // история просмотра
    memoized(movie);
  });

  const toLocalStorage = (movie) => {
    localStorage.setItem("movie" + movie.id, JSON.stringify(movie));
  };

  const memoized = useCallback(() => {
    toLocalStorage(movie);
  }, [movie]);

  return (
    <div className="movie-details">
      <span className="movie-details-search" onClick={showSearch}>
        &#9906;
      </span>
      <div className="movie-details-info">
        <img src={movie.img} alt="movie" />
        <div>
          <h1>{movie.name}</h1>
          <h5>{movie.geanre}</h5>
          <div>
            <span>{movie.year} </span>
            <span> duration</span>
          </div>
          <p>
            description! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed neque tempore autem, nesciunt quasi aperiam vero nulla
            laborum perspiciatis reiciendis quisquam dolores eius excepturi,
            omnis totam provident accusantium, itaque minus odio cum unde
            recusandae officiis magnam? Animi laboriosam a, nostrum sequi enim,
            deleniti harum tempore, neque nulla officia maiores consectetur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
