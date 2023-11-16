import React, { useEffect, useState } from "react";
import { useAuth } from "./UserComponents/UserContext";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const FavoriteGames = () => {
  const [favoritedGames, setFavoritedGames] = useState([]);
  const { user } = useAuth();
  const { userId } = useParams

  useEffect(() => {
    if (user && userId) {
      fetch(`${API}/users/${userId}/favoritedGames`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((response) => {
          console.log(response);
          setFavoritedGames(response);
        })
        .catch((error) => {
          console.error("Error fetching favorited games:", error);
        });
    }
  }, [user]);

  return (
    <div className="favoritedGames">
      <section>
        <table>
          <tbody>
            {favoritedGames && favoritedGames.length > 0 ? (
              favoritedGames.map((favoritedGame, index) => (
                <tr key={index}>
                  <td>{favoritedGame.title}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No favorited games found</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FavoriteGames;
