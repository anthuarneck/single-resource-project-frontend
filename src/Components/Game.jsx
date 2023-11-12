import { Link } from "react-router-dom";

const Game = ({game}) => {
    return (
        <tr>
            <td>
                {game.available ? (<span>👾</span>) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
            </td>
            <td style={{ cursor: "alias" }}>
        <a href={`/games/${game.id}`} rel="noreferrer">
          {game.name}
        </a>
      </td>
      <td>
        <Link to={`/games/${game.id}`}>✏️</Link>
      </td>
        </tr>
    );
}

export default Game;
