import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./UserComponents/UserContext";


const API = import.meta.env.VITE_API_URL;

const GameDetails = () => {
  const [game, setGame] = useState([]);
  const { user } = useAuth();
  let { index, userId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/users/${user.id}/games/${index}`)
      .then((response) => response.json())
      .then((response) => {
        setGame(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const handleDelete = () => {
    deleteGame()
  }
  
  const handleFavorite = () => {
    favoriteGame()
  }

  const handleCart = () => {
    addGameToCart();
  }

  const deleteGame = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/users/${user.id}/games/${index}`, httpOptions)
      .then((response) => {
        alert(`You have just deleted the game from your games list`);
        navigate(`/users/${user.id}/games`);
      })
      .catch((error) => console.error(error));
  };

  const favoriteGame = () => {
    const httpOptions = { method: "POST" };
    fetch(`${API}/users/${user.id}/favoritedGames`, httpOptions)
      .then((response) => {
        alert(`Game has been added to your favorites.`);
        navigate(`/users/${user.id}/favoritedGames`);
      })
      .catch((error) => console.error(error));
  };

  const addGameToCart = () => {
    const httpOptions = { method: "POST" };
    fetch(`${API}/users/${user.id}/cart`, httpOptions)
      .then((response) => {
        alert(`You have just deleted the game from your games list`);
        navigate(`/users/${user.id}/games`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
         <article>
      <div className="transactionDetails">
        <h3>Title: {game.title}</h3>
        <h3>Amount: ${game.price}</h3>
        <h3>ESRB Rating: {game.esrb_rating}</h3>
        <h5>Game Released: {game.release_year}</h5>
        <h5>Available: {game.available ? "👾" : "TBD"}</h5>
        <h5>Genre: {game.genre}</h5>
        <h5>Score: {game.score}</h5>
      </div>
      <div className="navigation">
        <Link to={`/users/${user.id}/games`}>
          <button>Back</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleFavorite}>Add to favorites</button>
        <button onClick={handleCart}>Add to cart</button>
      </div>
    </article>

    </div>
  );
};

export default GameDetails;
