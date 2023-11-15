import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const Navbar = () => {
    const { userId } = useParams()


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
                <Link to="/games">Games</Link>
            </h2>
            <h2>
                <Link to="/favoritedGames">Favorited Games</Link>
            </h2>
        </nav>
    );
}

export default Navbar;
