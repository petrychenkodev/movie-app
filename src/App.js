import React from "react";
import Search from "./components/search/Search";
import Navigation from "./components/navigation/Navigation";
import MovieList from "./components/movie-list/MovieList";

const App = () => {
  return (
    <React.Fragment>
      <Search />
      <Navigation />
      <MovieList />
    </React.Fragment>
  );
};
export default App;
