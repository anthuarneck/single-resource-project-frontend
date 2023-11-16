import { useState, createContext, useCallback, useContext } 
from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: false,
    password: false,
  });
  const loginUser = (userInput) => {
      console.log(userInput)
    fetch(`${API}/users/`, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json",
      },
    })
     .then((response) => response.json())
     .then(data => {
        console.log(data)
        setUser(data)
        navigate(`/users/${data.user.id}/games`)
     })
  };

  const value = {
    user,
    loginUser,
  };
  return (
    <AuthContext.Provider value={value}>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
