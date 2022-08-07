import styled from "styled-components";
import Menu from "./Menu";
import Header from "./Header";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { GetHabitsAPI } from "../services/trackit";
import CreateHabit from "./CreateHabit";
import { ThreeDots } from "react-loader-spinner";
import HabitsContent from "./HabitsContent";

export default function Habits() {
  const { userData, setUserData, progress } = useContext(UserContext);
  const [habitsList, setHabitsList] = useState(null);
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  console.log(progress)

  useEffect(() => GetHabits(), []);

  function GetHabits() {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    GetHabitsAPI(config)
      .then((res) => {
        console.log(res.data)
        setHabitsList(res.data);
      })
      .catch((error) => console.log(error));
  }

  function addHabit() {
    setCreate(!create);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          <h2>Meus Habitos</h2>
          <button onClick={addHabit}>+</button>
        </Title>
        {create ? (
          <CreateHabit
            setHabitsList={setHabitsList}
            create={create}
            setCreate={setCreate}
            GetHabits={GetHabits}
            name={name}
            setName={setName}
          />
        ) : (
          <div></div>
        )}
        <Content>
          {habitsList === null ? (
            <div>
              <ThreeDots color="#52B6FF" />
            </div>
          ) : (
            <HabitsContent habitsList={habitsList} GetHabit={GetHabits} />
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
