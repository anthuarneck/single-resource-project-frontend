import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useAuth } from "../src/Components/UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL;

import Navbar from "./Components/Navbar";
import Games from "./Components/Games";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import GamesCart from "./Components/gamesCart";
import FavoriteGames from "./Components/FavoriteGames";
import Error from "./Pages/Error";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import { AuthProvider } from "../src/Components/UserComponents/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/users/:userId/games" element={<Games />} />
            <Route path="/users/:userId/games/:index" element={<Show />} />
            <Route path="/cart" element={<GamesCart />} />
            <Route
              path="/users/:userId/favoritedGames"
              element={<FavoriteGames />}
            />
            <Route path="/users/:userId/games/new" element={<New />} />
            <Route path="/users/:userId/games/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
