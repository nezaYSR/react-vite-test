import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.scss";
import Chat from "./pages/chat/ChatPage";
import Login from "./pages/login/LoginPage";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
      navigate("/");
    } else {
      navigate("/login"); // redirect to Login page
    }
  }, [navigate]);

  return (
    <Routes>
      {!loggedIn && <Route path="/login" element={<Login />} />}
      <Route path="/" element={<Chat />} />
    </Routes>
  );
}

export default App;
