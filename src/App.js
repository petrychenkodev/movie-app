import React, { useState } from "react";
import Search from "./components/search/Search";
import Navigation from "./components/navigation/Navigation";
import MovieList from "./components/movie-list/MovieList";
import AddMovie from "./components/add-movie-modal/AddMovie";
import EditMovie from "./components/edit-movie-modal/EditMovie";
import DeleteMovie from "./components/delete-movie-modal/DeleteMovie";
import MovieDetails from "./components/movie-details/MovieDetails";

const App = () => {
  const [showSearchComponent, setShowSearchComponent] = useState(true);
  const [showAddModal, setShowAddModal] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const movies = [
    {
      name: "Hitch",
      geanre: "Comedy",
      year: "2004",
      id: "1",
      img: "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Dumb and dumber",
      geanre: "Comedy",
      year: "1994",
      id: "7",
      img: "https://flxt.tmsimg.com/assets/p16298_p_v8_ae.jpg",
    },
    {
      name: "Batman",
      geanre: "Action",
      year: "2022",
      id: "6",
      img: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/the_batman.jpg",
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

  const [movie, setMovie] = useState(movies[0]);

  const closeShowAddModal = () => {
    setShowAddModal(false);
  };
  const closeSearch = () => {
    setShowSearchComponent(false);
  };
  const showSearch = () => {
    setShowSearchComponent(true);
  };
  const onMovieClick = (id) => {
    closeSearch();
    let newMovie = movies.find((item) => item.id === id);
    setMovie(newMovie);
  };

  return (
    <React.Fragment>
      {showSearchComponent ? (
        <Search />
      ) : (
        <MovieDetails movie={movie} showSearch={showSearch} />
      )}
      <Navigation />
      <MovieList onMovieClick={onMovieClick} movies={movies} />
      {showAddModal ? <AddMovie closeModal={closeShowAddModal} /> : ""}
      {showEditModal ? <EditMovie /> : ""}
      {showDeleteModal ? <DeleteMovie /> : ""}
    </React.Fragment>
  );
};
export default App;
