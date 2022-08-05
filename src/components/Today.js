import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import { gettodayHabits } from "../services/trackit";
import { ThreeDots } from "react-loader-spinner";
import TodayHabit from "./TodayHabit";

export default function Today() {
  const { userData, setUserData } = useContext(UserContext);
  const [todayHabits, setTodayHabits] = useState(null);

  useEffect(() => getHabits(), []);

  function getHabits() {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    gettodayHabits(config)
      .then((res) => {
        console.log(res.data);
        setTodayHabits(res.data);
      })
      .catch((error) => {
        alert("Erro em buscar os habitos de hoje...");
      });
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          <h2>Hoje</h2>
          <p>Nenhum hábito concluído ainda</p>
        </Title>
        <Content>
          {todayHabits === null ? (
            <div>
              <ThreeDots color="#52B6FF" />
            </div>
          ) : (
            <div>
              {todayHabits.map((value, i) => (
                <TodayHabit data={value} getHabits={getHabits}/>
              ))}
            </div>
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
  overflow-y: scroll;
  padding-bottom: 100px;

  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    line-height: 23px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 23px;
    font-weight: 400;
    color: #126ba5;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #bababa;
    margin-top: 5px;
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
