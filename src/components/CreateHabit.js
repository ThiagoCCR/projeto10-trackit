import { useState, useContext } from "react";
import styled from "styled-components";
import DayButton from "./DayButton";
import { createHabit,GetHabitsAPI } from "../services/trackit";
import UserContext from "../contexts/UserContext";

export default function CreateHabit({ create, setCreate, setHabitsList, GetHabits }) {
  const { userData, setUserData } = useContext(UserContext);
  const [name, setName] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleForm(e) {
    e.preventDefault();
    const body = {
        name,
        days:selectedDays,
    }
    console.log(body)
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    console.log(config)
    //loading: TRUE
    
    if (selectedDays.length === 0) {
      return alert("Você tem que escolher ao menos um dia");
    } else {
      createHabit(body, config).then(()=>{
        GetHabits()
         //Loading: False
      }).catch(()=>{
        alert('Erro na criação do Quizz');
         //Loading: False
    })
    }
   
  }

  return (
    <>
      <Wrapper>
        <form onSubmit={handleForm}>
          <input
            name="nomeHabito"
            type="text"
            value={name}
            placeholder="nome do hábito"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <DaysContainer>
            {days.map((value, i) => (
              <DayButton
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
                key={i}
                number={i + 1}
                day={value}
              />
            ))}
          </DaysContainer>
          <OptionsContainer>
            <button onClick={() => setCreate(!create)}>Cancelar</button>
            <button type="submit">Salvar</button>
          </OptionsContainer>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  input {
    font-family: "Lexend Deca", sans-serif;
    font-size: 20px;
    font-weight: 400;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #dbdbdb;
    padding-left: 10px;
  }
`;

const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 9px;
  margin-top: 9px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 9px;
  margin-top: 9px;
`;
