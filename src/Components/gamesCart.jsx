import React, { useEffect, useState } from 'react';
import { useAuth } from "./UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL;

const GamesCart = () => {
  const [games, setGames] = useState([]);
  const [gameBalance, setGameBalance] = useState(0);
  const { cartGames, setCartGames } = useAuth();


  const calculateBalance = () => {
    let cartBalance = 0;
  
    cartGames.forEach((game) => {
      const price = parseFloat(game.price); 
      if (isNaN(price)) {
        console.error(`Invalid price for game ${game.id}: ${game.price}`);
        return;
      }
  
      if (game.spent) {
        cartBalance -= price;
      } else {
        cartBalance += price;
      }
    });
  
    setGameBalance(cartBalance);
  };
  console.log(cartGames)
  
  useEffect(() => {
    calculateBalance();
  }, [cartGames]);

  return (
    <div>
      <p>Total Balance: ${gameBalance}</p>
      <ul>
        {cartGames.map((game) => (
          <li key={game.id}>
            {game.title} - ${game.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesCart;
