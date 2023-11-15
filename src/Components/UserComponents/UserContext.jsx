import { useState, createContext, useCallback, useContext } from "react";
// import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

export const AuthProvider = (props) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    email: false,
    password: false,
  });

  const loginUser = (userInput) => {
    fetch(`${API}/users/`, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          (response) => response.json();
          setUser(response);
        } else {
          alert("Login failed: Invalid email or password");
          throw new Error("Login Failed");
        }
      })
      // navigate(`/users/${userData.user.id}/games`);
      .catch((error) => console.error("catch", error));
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
