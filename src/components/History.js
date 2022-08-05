import Header from "./Header";
import styled from "styled-components";
import Menu from "./Menu";

export default function History() {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>
          <h2> Histórico</h2>
        </Title>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
    margin-top: 20px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    line-height: 23px;
  }
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
`;
