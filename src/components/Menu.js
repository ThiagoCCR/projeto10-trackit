import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UserContext from "../contexts/UserContext";

export default function Menu() {
  const navigate = useNavigate();
  const { progress, setProgress } = useContext(UserContext);

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
        />{""}
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
