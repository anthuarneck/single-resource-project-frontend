import React from 'react';
import NewGameForm from "../Components/NewGameForm"
import Navbar from '../Components/Navbar';

const New = () => {
    return (
        <div>
            <Navbar />
            <h1>Add New Game</h1>
            <NewGameForm />
        </div>
    );
}

export default New;
