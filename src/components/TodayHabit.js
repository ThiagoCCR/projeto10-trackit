import { useState} from "react";
import styled from "styled-components";
import { checkHabitAPI, uncheckHabitAPI } from "../services/trackit";

export default function TodayHabit({
  data,
  getHabits,
  checkedHabits,
  setCheckedHabits,
  calculateProgress,
}) {
  const [checked, setChecked] = useState(data.done);
  const auth = JSON.parse(localStorage.getItem("USER"));

  function checkIcon() {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

    setChecked(!checked);

    if (checked === false) {
      const body = {
        done: true,
      };
      checkHabitAPI(data.id, body, config)
        .then(() => getHabits(config))
        .catch((error) => alert(error));
    } else if (checked === true) {
      const body = {
        done: true,
      };
      uncheckHabitAPI(data.id, body, config)
        .then(() => getHabits(config))
        .catch((error) => alert(error));
    }
  }

  return (
    <Wrapper>
      <TextContainer>
        <h1>{data.name}</h1>
        <Info checked={checked}>
          <p>Sua Sequência atual: </p>
          <Colored checked={checked}> {data.currentSequence}</Colored>
        </Info>
        <Info checked={checked}>
          <p>Seu recorde: </p>
          <Record record={data.highestSequence} current={data.currentSequence}>
            {data.highestSequence}
          </Record>
        </Info>
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

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  p {
    font-size: 13px !important;
    line-height: 16px;
  }
`;

const Colored = styled.p`
  color: ${(props) => (props.checked ? "#8FC549" : "#666666")} !important;
  margin-left: 2px;
`;

const Record = styled.p`
  color: ${(props) => {
    if (props.record === props.current && props.record > 0) {
      return "#8FC549";
    } else {
      return "#666666";
    }
  }} !important;
  margin-left: 2px;
`;
