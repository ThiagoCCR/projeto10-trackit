import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { checkHabitAPI, uncheckHabitAPI, gettodayHabits } from "../services/trackit";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({ data, getHabits }) {
  const [checked, setChecked] = useState(data.done);
  const { userData } = useContext(UserContext);

  function checkIcon() {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    setChecked(!checked);

    if (checked === false) {
      console.log('oi')
      const body = {
        done: true
      }
      checkHabitAPI(data.id, body, config).then(()=>getHabits(config)).catch((error)=>alert(error));
    } else if (checked === true) {
      const body = {
        done: true
      }
      uncheckHabitAPI(data.id, body, config).then(()=>getHabits(config)).catch((error)=>alert(error));
    }

  }

  return (
    <Wrapper>
      <TextContainer>
        <h1>{data.name}</h1>
        <p>Sua Sequência atual: {data.currentSequence}</p>
        <p>Seu recorde: {data.highestSequence}</p>
      </TextContainer>
      <IconContainer checked={checked}>
        <ion-icon name="checkmark-sharp" onClick={() => checkIcon()}></ion-icon>
      </IconContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 94px;
  width: 340px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  color: #666666;
  h1 {
    font-size: 20px;
    line-height: 30px;
  }
  p {
    font-size: 13px !important;
    line-height: 16px;
  }
`;

const IconContainer = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background-color: ${(props) => (props.checked ? "#8FC549" : "#E7E7E7")};
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    font-size: 50px;
    color: #ffffff;
  }
`;
