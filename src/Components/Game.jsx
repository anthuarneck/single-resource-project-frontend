import { Link, useParams } from "react-router-dom";

const Game = ({ game }) => {
    const { userId } = useParams();
    
  return (
    <tr>
      <td>
        {game.available ? <span>👾</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={`/users/${userId}/games/${game.id}`} rel="noreferrer">
          {game.title}
        </a>
      </td>
      <td>
        <Link to={`/games/${game.id}`}>✏️</Link>
      </td>
    </tr>
  );
};

export default Game;
