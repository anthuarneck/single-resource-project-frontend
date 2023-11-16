import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const NewGameForm = () => {
  let { userId } = useParams();

  const [game, setGame] = useState({
    title: "",
    price: 0.0,
    esrb_rating: "",
    release_year: 0,
    available: false,
    genre: "",
    score: 0,
  });
  const navigate = useNavigate();

  const addGame = () => {
    fetch(`${API}/users/${userId}/games`, {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        navigate(`/users/${userId}/games`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormTextChange = (e) => {
    const { id, value } = e.target;
    const updatedValue =
      id === "price" || id === "release_year" || id === "score"
        ? parseFloat(value) || 0
        : value;
    setGame({ ...game, [id]: updatedValue });
  };

  const handleCheckbox = () => {
    setGame({ ...game, available: !game.available });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame();
  };

  return (
    <div className="NewGameForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={game.title}
          type="text"
          onChange={handleFormTextChange}
          placeholder="Game title"
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={game.price}
          type="number"
          step={0.01}
          onChange={handleFormTextChange}
          placeholder="Enter the price of the game."
          required
        />
        <label htmlFor="esrb_rating">ESRB Rating:</label>
        <input
          id="esrb_rating"
          value={game.esrb_rating}
          type="text"
          onChange={handleFormTextChange}
          placeholder="Enter ESRB rating for the game ex. 'Teen'"
          required
        />
        <label htmlFor="release_year">Year Of Release:</label>
        <input
          id="release_year"
          value={game.release_year}
          type="number"
          onChange={handleFormTextChange}
          placeholder="Year of release"
          required
        />
        <label htmlFor="available">Available:</label>
        <input
          id="available"
          type="checkbox"
          onChange={handleCheckbox}
          checked={game.available}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          value={game.genre}
          type="text"
          onChange={handleFormTextChange}
          placeholder="Game genre ex. 'MMO'."
          required
        />
        <label htmlFor="score">Score:</label>
        <input
          id="score"
          value={game.score}
          type="number"
          step={1}
          min={1}
          max={5}
          onChange={handleFormTextChange}
          placeholder="Game score rating between 1 and 5"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewGameForm;
