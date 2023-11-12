import React, { useEffect, useState } from 'react';
import Game from "./Game"

const API = import.meta.env.VITE_API_URL;

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${API}/games`)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            setGames(response.data.payload)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <div className='allGames'>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>See this game.</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {games.map((game) => {
                            return <Game key={game.id} game={game}/>
                        })}
                    </tbody> */}
                </table>
            </section>
        </div>
    );
}

export default Games;
