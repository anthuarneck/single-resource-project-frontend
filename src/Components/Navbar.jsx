import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuth } from "./UserComponents/UserContext";


const API = import.meta.env.VITE_API_URL;

const Navbar = () => {
    const { user } = useAuth();


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
                <Link to={`/users/${user.id}/games`} >Games</Link>
            </h2>
            <h2>
                <Link to={`/users/${user.id}/favoritedGames`}>Favorited Games</Link>
            </h2>
        </nav>
    );
}

export default Navbar;
