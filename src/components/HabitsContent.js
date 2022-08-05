import styled from "styled-components";

export default function HabitsContent({ habitsList, GetHabit }) {
  console.log(habitsList);

  return (
    <>
      <div>
        {habitsList.map((value, i) => (
          <HabitBox key={i}>
            <div>
              <h2>{value.name}</h2>
            </div>
            <DaysContainer>
              <Day name={"1"} selected={value.days.includes(1)}>D</Day>
              <Day name={"2"} selected={value.days.includes(2)}>S</Day>
              <Day name={"3"} selected={value.days.includes(3)}>T</Day>
              <Day name={"4"} selected={value.days.includes(4)}>Q</Day>
              <Day name={"5"} selected={value.days.includes(5)}>Q</Day>
              <Day name={"6"} selected={value.days.includes(6)}>S</Day>
              <Day name={"7"} selected={value.days.includes(7)}>S</Day>
            </DaysContainer>
          </HabitBox>
        ))}
      </div>
    </>
  );
}

const HabitBox = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #666666;
  }
`;

const Day = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
`;

const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
