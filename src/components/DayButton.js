import { useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";



export default function DayButton({
  day,
  number,
  isSelected
}) {
  const {selectedDays, setSelectedDays } = useContext(UserContext);
  const [selected, setSelected] = useState(isSelected);

  function handleDay(number) {
    const selectedSorted = [...selectedDays,number].sort();

    setSelected(!selected);
    selectedDays.includes(number)
      ? setSelectedDays(selectedDays.filter((value) => value !== number))
      : setSelectedDays([...selectedSorted]);
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
