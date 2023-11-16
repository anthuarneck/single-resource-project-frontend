import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuth } from "./UserComponents/UserContext";


const API = import.meta.env.VITE_API_URL;

const Navbar = () => {
    const { userId } = useParams()
    const [favoritedGames, setFavoritedGames] = useState([])

    useEffect(() => {
        if (userId) {
          fetch(`${API}/users/${userId}/favoritedGames`)
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
              setFavoritedGames(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, [userId]); 

    return (
        <nav>
            <h2>
                <Link to={`/users/${userId}/games`}>Games</Link>
            </h2>
            <h2>
                <Link to={`/users/${userId}/favoritedGames`}>Favorited Games</Link>
            </h2>
            <h2>
              <Link to={`/users/${userId}/games/new`}>Add New Game</Link>
            </h2>
        </nav>
    );
}

export default Navbar;
