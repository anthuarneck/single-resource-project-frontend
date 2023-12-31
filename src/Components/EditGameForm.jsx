import React,{ useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "./UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL

const EditGameForm = () => {
    const [game, setGame] = useState({
        title: "",
        price: 0.0,
        esrb_rating: "",
        release_year: 0,
        available: false,
        genre: "",
        score: 0,
      });
   
      let { userId, index } = useParams();
      const navigate = useNavigate();

   
    
      const editGame = () => {
        fetch(`${API}/users/${userId}/games/${index}`, {
          method: "PUT",
          body: JSON.stringify(game),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            navigate(`/users/${userId}/games`);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const handleFormTextChange = (e) => {
        setGame({ ...game, [e.target.id]: e.target.value });
      };
    
      const handleCheckbox = () => {
        setGame({ ...game, available: !game.available });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        editGame();
      };
    
      return (
        <div className="NewGameForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="Title">Title:</label>
            <input
              id="title"
              value={game.title}
              type="text"
              onChange={handleFormTextChange}
              placeholder="Game title"
              required
            />
            <label htmlFor="Price">Price:</label>
            <input
              id="price"
              value={game.price}
              type="number"
              step={0.01}
              onChange={(e) => handleFormTextChange(e)}
              placeholder="Enter the price of the game."
              required
            />
            <label htmlFor="esrb_rating">ESRB Rating:</label>
            <input
              id="esrb_rating"
              value={game.esrb_rating}
              type="text"
              onChange={handleFormTextChange}
              placeholder="Enter esrb (Entertainment Software Rating Board) rating for the game ex. 'Teen'"
              required
            />
            <label htmlFor="release_Year">Year Of Release:</label>
            <input
              id="release_year"
              value={game.release_year}
              type="number"
              onChange={(e) => handleFormTextChange(e)}
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
              onChange={(e) => handleFormTextChange(e)}
              placeholder="Game score rating between 1 and 5"
              required
            />
          < br/>
          <input type="submit" />
          </form>
        </div>
      );
}

export default EditGameForm;
