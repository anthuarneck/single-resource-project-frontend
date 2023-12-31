import React, { useEffect, useState } from "react";
import Game from "./Game";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Games = () => {
  const [games, setGames] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`${API}/users/${userId}/games`)
      .then((response) => response.json())
      .then((response) => {
        setGames(response.data.payload);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="allGames">
      <section>
        <table>
          <thead>
            <tr>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => {
              return <Game key={game.id} game={game} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Games;
