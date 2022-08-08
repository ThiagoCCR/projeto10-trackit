import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { gettodayHabits } from "../services/trackit";
import "react-circular-progressbar/dist/styles.css";
import UserContext from "../contexts/UserContext";

export default function Menu() {
  const navigate = useNavigate();
  const { progress, userData, setProgress, habitsList } =
    useContext(UserContext);
  const auth = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    gettodayHabits(config)
      .then((res) => {
        const total = res.data.length;
        const totalDone = res.data.filter((val) => val.done === true).length;
        const result = (totalDone / total) * 100;
        if (!isNaN(result)) {
          setProgress(result);
        }
        if (totalDone === 0 && total === 0) {
          setProgress(0);
        }
      })
      .catch((error) => {
        console.log("erro...");
      });
  }, [progress, habitsList, userData.token, setProgress, auth.token]);

  return (
    <Wrapper>
      <button onClick={() => navigate("/habitos")}>Hábitos</button>
      <ProgressBar onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={progress}
          text={`Menu`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
        {""}
      </ProgressBar>
      <button onClick={() => navigate("/historico")}>Histórico</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;

  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    font-size: 18px;
    font-family: Lexend Deca;
    font-weight: 400;
    background-color: #ffffff;
    border: none;
    color: #52b6ff;
  }
`;

const ProgressBar = styled.button`
  height: 91px;
  width: 91px;
  background-color: #52b6ff;
  border-radius: 50%;
  margin-bottom: 20px;
`;
