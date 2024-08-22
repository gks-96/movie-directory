import "./add-movie.css";
import { Fragment, useEffect, useState } from "react";

const TITLE_MIN_LENGTH = 0;
const TITLE_MAX_LENGTH = 36;

const PRICE_MIN_PRICE = 2;
const PRICE_MAX_PRICE = 100;

function AddMovie() {
  // State to hold form input values
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [isHD, setIsHD] = useState("false");
  const [isRentable, setIsRentable] = useState("false");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [moveSubmitted, setMovieSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (validate()) {
      return;
    }

    // Create a new movie object with form data
    const movieData = {
      movie_title: title.trim(),
      isHD: isHD === "true",
      isRentable: isRentable === "true",
      price: parseFloat(price), // Convert price to a number
    };

    addMovie(movieData);
    setMovieSubmitted(true);
    setTimeout(() => {
      setMovieSubmitted(false);
    }, 5000);
    clearScreen();
  };

  const validate = () => {
    let isError = false;
    if (title.length == TITLE_MIN_LENGTH || title.length > TITLE_MAX_LENGTH) {
      setTitleError(true);
      isError = true;
    } else if (title.length > 0 || title.length < 36) {
      setTitleError(false);
      isError = false;
    }

    if (price > PRICE_MAX_PRICE || price < PRICE_MIN_PRICE) {
      setPriceError(true);
      isError = true;
    } else {
      setPriceError(false);
    }
    return isError;
  };

  const addMovie = async (movieData) => {
    try {
      const response = await fetch("http://localhost:8000/rouletech/movie/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData), // Send movie data as JSON
      });

      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
    } catch (e) {
      console.error("Failed to add the movie to the list", e);
    }
  };
  // console.log("submit Handler completed ");
  const cancelHandler = (e) => {
    // clear the form
    e.preventDefault();
    clearScreen();

    console.log("Form cleared");
  };

  const clearScreen = () => {
    setTitle("");
    setIsHD("false");
    setIsRentable("false");
    setPrice("");
  };
  return (
    <div className="add-movie">
      <h2>Add New Movie </h2>
      <form className="form">
        <div className="form-element">
          <label>Title</label>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {titleError && <div className="error-message">Error in title</div>}
          </div>
        </div>

        <div className="form-element">
          <label>High Definition</label>
          <select value={isHD} onChange={(e) => setIsHD(e.target.value)}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-element">
          <label>Available for Rent</label>
          <select
            value={isRentable}
            onChange={(e) => setIsRentable(e.target.value)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-element">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          {priceError && (
            <div className="error-message">
              Price should be more than 2 and less than 100
            </div>
          )}
        </div>

        <div className="form-button">
          <button className="btn-submit" onClick={submitHandler}>
            Submit
          </button>
          <button className="btn-cancel" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
        <div className="movieSubmitted">
          {moveSubmitted && <div>Movie added successfully</div>}
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
