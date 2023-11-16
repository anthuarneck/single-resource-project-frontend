import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const GameDetails = () => {
  const [game, setGame] = useState([]);
  let { userId, index } = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    fetch(`${API}/users/${userId}/games/${index}`)
      .then((response) => response.json())
      .then((response) => {
        setGame(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = () => {
    deleteGame();
  };

  const handleFavorite = () => {
    favoriteGame();
  };

  const handleCart = () => {
    addGameToCart();
  };

  const deleteGame = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/users/${userId}/games/${index}`, httpOptions)
      .then((response) => {
        alert(`You have just deleted the game from your games list`);
        navigate(`/users/${userId}/games`);
      })
      .catch((error) => console.error(error));
  };

  const favoriteGame = () => {
    const httpOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: userId, game_id: index }),
    };

    fetch(`${API}/users/${userId}/favoritedGames/${index}`, httpOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        alert(`Game has been added to your favorites.`);
        navigate(`/users/${userId}/favoritedGames`);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const addGameToCart = () => {
    const httpOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ game_id: index }),
    };
    fetch(`${API}/users/${userId}/cart`, httpOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        alert(`Game added to Cart`);
        navigate(`/users/${userId}/games`);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div>
      <article>
        <div className="transactionDetails">
          <h3>Title: {game.title}</h3>
          <h3>Amount: ${game.price}</h3>
          <h3>ESRB Rating: {game.esrb_rating}</h3>
          <h5>Game Released: {game.release_year}</h5>
          <h5>Available: {game.available ? ":space_invader:" : "TBD"}</h5>
          <h5>Genre: {game.genre}</h5>
          <h5>Score: {game.score}</h5>
        </div>
        <div className="navigation">
          <Link to={`/users/${userId}/games`}>
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