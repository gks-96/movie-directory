import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
// import MovieList from "../movies/movie-list";
// import AddMovie from "../movies/add-movie/add-movie";
import Home from "../home";
import MovieList from "../movies/movie-list/movie-list";
import AddMovie from "../movies/add-movie/add-movie";

function Layout() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-list" element={<MovieList />} />
            <Route path="/add-movie" element={<AddMovie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
