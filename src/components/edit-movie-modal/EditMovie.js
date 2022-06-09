import React from "react";
import "./edit-movie.scss";

const EditMovie = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <span className="close">+</span>
        <h1 className="modal-title">EDIT MOVIE</h1>
        <form>
          <div>
            <label htmlFor="title">TITLE</label>
            <input type="text" id="title" />
          </div>
          <div>
            <label htmlFor="url">movie url</label>
            <input type="text" id="url" />
          </div>
          <div>
            <label htmlFor="genre">genre</label>
            <select name="genre" id="genre">
              <option value="none">Select Genre</option>
              <option value="all">all</option>
              <option value="documentary">documentary</option>
              <option value="comedy">comedy</option>
              <option value="horror">horror</option>
              <option value="crime">crime</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">RELEASE DATE</label>
            <input type="date" id="date" />
          </div>
          <div>
            <label htmlFor="rating">RATING</label>
            <input type="number" id="rating" />
          </div>
          <div>
            <label htmlFor="runtime">RUNTIME</label>
            <input type="number" id="runtime" />
          </div>
          <div>
            <label htmlFor="overview">OVERVIEW</label>
            <textarea
              id="overview"
              name="overview"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="button-holder">
            <button type="reset">reset</button>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
