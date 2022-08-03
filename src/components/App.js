import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserContext from "../contexts/UserContext.js";
import Habits from "./Habits"

export default function App() {
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
