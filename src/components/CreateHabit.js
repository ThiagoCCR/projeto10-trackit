import { useContext } from "react";
import styled from "styled-components";
import DayButton from "./DayButton";
import { createHabit } from "../services/trackit";
import UserContext from "../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";
import days from "../constants/days";

export default function CreateHabit({
  create,
  setCreate,
  setHabitsList,
  GetHabits,
}) {
  const { loading, setLoading, selectedDays, name, setName } =
    useContext(UserContext);
  const auth = JSON.parse(localStorage.getItem("USER"));

  function handleForm(e) {
    e.preventDefault();
    const body = {
      name,
      days: selectedDays,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    setLoading(true);

    if (selectedDays.length === 0) {
      setLoading(false);
      return alert("Você tem que escolher ao menos um dia");
    } else {
      createHabit(body, config)
        .then((res) => {
          GetHabits();
          setName("");
          setLoading(false);
          setCreate(!create);
        })
        .catch(() => {
          alert("Erro na criação do Quizz");
          setLoading(false);
        });
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
            disabled={loading}
            required
          />
          <DaysContainer>
            {days.map((value, i) => (
              <DayButton
                key={i}
                number={i}
                day={value}
                isSelected={selectedDays.includes(i)}
              />
            ))}
          </DaysContainer>
          <OptionsContainer>
            <Cancel disabled={loading} onClick={() => setCreate(!create)}>
              Cancelar
            </Cancel>
            <Save disabled={loading} type="submit">
              {loading ? (
                <div>
                  <ThreeDots color="#ffffff" />
                </div>
              ) : (
                <p>Salvar</p>
              )}
            </Save>
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
  margin-top: 20px;

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
  margin-top: 9px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  padding-left: 9px;
  margin-top: 9px;
`;

const Cancel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  margin-right: 5px;
  background-color: #ffffff;
  height: 35px;
  color: #52b6ff;
  width: 84px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  font-size: 16px;
  border: none;
`;

const Save = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  margin-right: 5px;
  background-color: #52b6ff;
  height: 35px;
  color: #ffffff;
  width: 84px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  font-size: 16px;
  border: none;
  margin-left: 10px;
`;
