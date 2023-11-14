import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const FavoriteGames = () => {
  const [favoritedGames, setFavoritedGames] = useState([]);
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
    <div className="favoritedGames">
      <section>
        <table>
          <tbody>
            {favoritedGames.map((favoritedGame, index) => (
              <tr key={index}>
                <td>{favoritedGame.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};


export default FavoriteGames;
