import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2>
                <Link to="/games">Games</Link>
            </h2>
            <h2>
                <Link to="/users/:userId/favoritedGames">Favorited Games</Link>
            </h2>
        </nav>
    );
}

export default Navbar;
