import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'


const API = import.meta.env.VITE_API_URL;

import Navbar from "./Components/Navbar";
import Games from "./Components/Games"
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import GamesCart from "./Components/gamesCart";
import FavoriteGames from "./Components/FavoriteGames";

function App() {

  

  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/games" element={<Games />} />
          <Route path="/cart" element={<GamesCart />} />
          <Route path="/users/:userId/favoritedGames" element={<FavoriteGames />} />
        </Routes>
    </Router>
  </div>
  )
}

export default App
