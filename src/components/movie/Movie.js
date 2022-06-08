import React from "react";
import "./movie.scss";
import PropTypes from "prop-types";

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

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
Movie.defaultProps = {
    movie: {
        name: "No data",
        geanre: "No data",
        year: "No data",
        id: "404",
        img: "http://in4wp.ru/wp-content/uploads/2014/12/in4wp_404_4.jpg",
      }
}

export default Movie;
