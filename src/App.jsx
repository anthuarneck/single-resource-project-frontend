import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Games from "./Components/Games"

function App() {
  

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/games" element={<Games />} />
        </Routes>
    </Router>
  </div>
  )
}

export default App
