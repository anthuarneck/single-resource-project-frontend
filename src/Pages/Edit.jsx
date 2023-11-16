import React from 'react';
import EditGameForm from '../Components/EditGameForm';
import Navbar from '../Components/Navbar';

const Edit = () => {
    return (
        <div>
            <Navbar />
            <h1>Edit Game</h1>
            <EditGameForm />
        </div>
    );
}

export default Edit;
