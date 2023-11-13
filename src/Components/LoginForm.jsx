import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const addUser = () => {
    fetch(`${API}/users/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/games`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          value={user.firstName}
          type="text"
          onChange={handleTextChange}
          placeholder="First Name"
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          value={user.lastName}
          type="text"
          onChange={handleTextChange}
          placeholder="Last Name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={user.email}
          type="text"
          onChange={handleTextChange}
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={user.password}
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
