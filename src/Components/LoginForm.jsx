import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { user, loginUser } = useAuth();
  
  useEffect(() => {
    if (user.id) {
      console.log(user.id)
      navigate(`/users/${user.id}/games`)
    }
  }, [user])


  const handleTextChange = (event) => {
    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(userInput);
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={userInput.email}
          type="text"
          onChange={handleTextChange}
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={userInput.password}
          type="text"
          onChange={handleTextChange}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <p>
        <Link to="/register">Register New Account</Link>
      </p>
    </div>
  );
};

export default LoginForm;
