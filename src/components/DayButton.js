import { useState } from "react";
import styled from "styled-components";

export default function DayButton({
  day,
  selectedDays,
  setSelectedDays,
  number,
}) {
  const [selected, setSelected] = useState(false);

  function handleDay(number) {
    setSelected(!selected);
    selectedDays.includes(number)
      ? setSelectedDays(selectedDays.filter((value) => value !== number))
      : setSelectedDays([...selectedDays, number]);
  }

  return (
    <Button selected={selected} onClick={() => handleDay(number)}>
      {day}
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  margin-right: 5px;
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  height: 30px;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
  width: 30px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  font-size: 20px;
`;
