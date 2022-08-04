import styled from "styled-components";
import Menu from "./Menu";
import Header from "./Header";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { GetHabitsAPI } from "../services/trackit";

export default function Habits() {
  const { userData, setUserData } = useContext(UserContext);
  const [habitsList, setHabitsList] = useState([]);
  const [create, setCreate] = useState(false);
  console.log(userData);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    GetHabitsAPI(config)
      .then((res) => {
        setHabitsList(res.data);
        console.log(res.data);
      })
      .catch(() => alert("erro na API"));
  }, []);

  function addHabit() {}

  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          <h2>MeusHabitos</h2>
          <button onClick={addHabit}>+</button>
        </Title>
        <Content>
          {habitsList.length === 0 ? (
            <div>
              <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </p>
              {create ? <div></div> : <div>{habitsList.map((val) => val)}</div>}
            </div>
          ) : (
            <div></div>
          )}
        </Content>
      </Wrapper>

      <Menu />
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 23px;
    font-weight: 400;
    color: #126ba5;
  }
  button {
    font-family: "Lexend Deca", sans-serif;
    font-size: 27px;
    font-weight: 400;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    background-color: #52b6ff;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    line-height: 23px;
  }
`;
