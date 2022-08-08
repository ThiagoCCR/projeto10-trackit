import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserContext from "../contexts/UserContext.js";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import PrivatePage from "./PrivatePage";

export default function App() {
  const [userData, setUserData] = useState({ image: "", token: "" });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedDays, setSelectedDays] = useState([]);
  const [name, setName] = useState("");
  const [habitsList, setHabitsList] = useState(null);

  return (
    <UserContext.Provider
      value={{
        habitsList,
        setHabitsList,
        name,
        setName,
        userData,
        setUserData,
        selectedDays,
        setSelectedDays,
        loading,
        setLoading,
        progress,
        setProgress,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route
            path="/habitos"
            element={
              <PrivatePage>
                <Habits />
              </PrivatePage>
            }
          />
          <Route
            path="/hoje"
            element={
              <PrivatePage>
                <Today />
              </PrivatePage>
            }
          />
          <Route
            path="/historico"
            element={
              <PrivatePage>
                <History />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
