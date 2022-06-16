import React from "react";
import "./delete-movie.scss";

const DeleteMovie = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <span className="close">+</span>
        <h1 className="modal-title">DELETE MOVIE</h1>
        <p>Are you sure you want to delete this movie?</p>
        <button type="submit">confirm</button>
      </div>
    </div>
  );
};

export default DeleteMovie;
