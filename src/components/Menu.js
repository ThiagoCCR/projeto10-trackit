import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {

  const navigate = useNavigate()

  return (
    <Wrapper>
      <button onClick={()=>navigate("/habitos")}>Hábitos</button>
      <button onClick={()=>navigate("/hoje")}>
        <img alt="Menu" src="../assets/img/menu.png" />
      </button>
      <button onClick={()=>navigate("/historico")}>Histórico</button>
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
