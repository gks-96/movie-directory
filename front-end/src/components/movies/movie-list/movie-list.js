import { Fragment, useEffect, useState } from "react";
import ListItem from "./list-item";

import "./movie-list.css";

let movies = [
  // { movie_title: "name1", isHD: "Yes", isRentable: "false", price: "4.99" },
  // { movie_title: "name2", isHD: "false", isRentable: "false", price: "4.99" },
  // { movie_title: "name3", isHD: "false", isRentable: "false", price: "24.99" },
  // { movie_title: "name4", isHD: "false", isRentable: "false", price: "14.99" },
];

function MovieList() {
  let [movieList, setMovieList] = useState(movies);
  // return <div>dsf</div>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/rouletech/movie/", {
          method: "GET",
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovieList(data);
      } catch (e) {
        console.error("Failed to fetch data", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie-list">
      <h2>List of Movies: </h2>
      <table>
        <tr>
          <td>Title</td>
          <td>Available on Rent</td>
          <td>High Definition</td>
          <td>Price </td>
        </tr>
        {movieList.map((movie) => {
          return <ListItem {...movie} />;
        })}
      </table>
    </div>
  );
}

export default MovieList;
