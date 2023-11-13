import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";
import Games from "./Components/Games"
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  

  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  </div>
  )
}

export default App
