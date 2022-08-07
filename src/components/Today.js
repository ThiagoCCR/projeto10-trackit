import UserContext from "../contexts/UserContext";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Menu from "./Menu";
import { gettodayHabits } from "../services/trackit";
import { ThreeDots } from "react-loader-spinner";
import TodayHabit from "./TodayHabit";
import dayjs from "dayjs";
import locale from "dayjs/locale/pt-br";

export default function Today() {
  const { userData, setUserData, progress, setProgress } =
    useContext(UserContext);
  const [todayHabits, setTodayHabits] = useState(null);
  const [checkedHabits, setCheckedHabits] = useState(0);
  const Now = dayjs().locale("pt-br");
  const date = FormatDate(Now);

  useEffect(() => {
    if (todayHabits !== null) {
      const total = todayHabits.length;
      const result = (checkedHabits / total) * 100;
      if (!isNaN(result)) {
        setProgress(result);
      }
    }
  }, [todayHabits, checkedHabits, setProgress]);

  function FormatDate(string) {
    string = string.format("dddd").replace("-feira", "");
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getHabits = useCallback(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    gettodayHabits(config)
      .then((res) => {
        console.log(res.data);
        setTodayHabits(res.data);
        setCheckedHabits(res.data.filter((val) => val.done === true).length);
      })
      .catch((error) => {
        alert("Erro em buscar os habitos de hoje...");
      });
  }, [userData.token]);

  useEffect(() => getHabits(), [getHabits]);

  return (
    <>
      <Header />
      <Wrapper>
        <Title progress={progress}>
          <h2>
            {" "}
            {date}, {Now.format("DD/MM")}
          </h2>
          <p>
            {progress === 0
              ? "Nenhum hábito concluído ainda"
              : progress.toFixed(0) + "% dos hábitos concluídos"}
          </p>
        </Title>
        <Content>
          {todayHabits === null ? (
            <div>
              <ThreeDots color="#52B6FF" />
            </div>
          ) : (
            <div>
              {todayHabits.map((value, i) => (
                <TodayHabit
                  checkedHabits={checkedHabits}
                  setCheckedHabits={setCheckedHabits}
                  key={i}
                  data={value}
                  getHabits={getHabits}
                />
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
    color: ${(props) => (props.progress > 0 ? "#8FC549" : "#bababa")};
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
