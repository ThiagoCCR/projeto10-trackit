import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserContext from "../contexts/UserContext.js";
import Habits from "./Habits"
import Today from "./Today"
import History from "./History";

export default function App() {
  const [userData, setUserData] = useState({image:"", token:""});
  const [loading, setLoading ] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedDays, setSelectedDays] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData, selectedDays, setSelectedDays, loading,  setLoading, progress, setProgress}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
