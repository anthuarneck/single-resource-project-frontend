import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const GameDetails = () => {
  const [games, setGames] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/games/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setGames(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, API]);

  const handleDelete = () => {
    deleteGame()
  }

  const deleteGame = () => {
    const httpOptions = { method: "DELETE" }
    fetch(`${API}/games/${id}`, httpOptions)
    .then(() => navigate(`/games`))
    .catch(error => console.log(error))
  }

  return (
    <div>

    </div>
  );
};

export default GameDetails;
