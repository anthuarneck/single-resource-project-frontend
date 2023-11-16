import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL;

const GamesCart = () => {
  const [games, setGames] = useState([]);
  const [gameBalance, setGameBalance] = useState(0);



  const calculateBalance = () => {
    let cartBalance = 0;
  
    games.forEach((game) => {
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
  
  useEffect(() => {
    calculateBalance();
  }, [games]);

  return (
    <div>
      <p>Total Balance: {gameBalance}</p>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} - ${game.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesCart;
