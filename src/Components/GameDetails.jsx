import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const GameDetails = () => {
  const [game, setGame] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/games/${index}`)
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

  const deleteGame = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/games/${id}`, httpOptions)
      .then((response) => {
        alert(`You have just deleted the game from your games list`);
        navigate(`/games`);
      })
    //   .catch((error) => console.error(error));
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
        <Link to={"/games"}>
          <button>Back</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>

    </div>
  );
};

export default GameDetails;
