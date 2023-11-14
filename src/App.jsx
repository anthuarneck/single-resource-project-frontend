import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";
import Games from "./Components/Games"
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import GamesCart from "./Components/gamesCart";

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
        </Routes>
    </Router>
  </div>
  )
}

export default App
