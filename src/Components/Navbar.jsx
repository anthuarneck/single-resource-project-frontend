import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuth } from "./UserComponents/UserContext";


const API = import.meta.env.VITE_API_URL;

const Navbar = () => {
    const { userId } = useParams()
    const [favoritedGames, setFavoritedGames] = useState([])

    console.log(user)
    useEffect(() => {
        if (user.id) {
          fetch(`${API}/users/${user.id}/favoritedGames`)
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
              setFavoritedGames(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, [user.id]); 

    return (
        <nav>
            <h2>
                <Link to={`/users/${userId}/games`}>Games</Link>
            </h2>
            <h2>
                <Link to={`/users/${userId}/favoritedGames`}>Favorited Games</Link>
            </h2>
        </nav>
    );
}

export default Navbar;
