import { Link, useParams } from "react-router-dom";

const Game = ({ game }) => {
    const { userId } = useParams();
    
  return (
    <tr>
      <td>
        {game.available ? <span>👾</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
      <td style={{ cursor: "alias" }}>
        <Link to={`/users/${userId}/games/${game.id}`}>
          {game.title}
        </Link>
      </td>
      <td>
        <Link to={`/users/${userId}/games/${game.id}/edit`}>✏️</Link>
      </td>
    </tr>
  );
};

export default Game;
