import React, { useState } from "react";
import Search from "./components/search/Search";
import Navigation from "./components/navigation/Navigation";
import MovieList from "./components/movie-list/MovieList";
import AddMovie from "./components/add-movie-modal/AddMovie";
import EditMovie from "./components/edit-movie-modal/EditMovie";
import DeleteMovie from "./components/delete-movie-modal/DeleteMovie";

const App = () => {
  const [showAddModal, setShowAddModal] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const closeShowAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <React.Fragment>
      <Search />
      <Navigation />
      <MovieList />
      {showAddModal ? <AddMovie closeModal={closeShowAddModal} /> : ""}
      {showEditModal ? <EditMovie /> : ""}
      {showDeleteModal ? <DeleteMovie /> : ""}
    </React.Fragment>
  );
};
export default App;
