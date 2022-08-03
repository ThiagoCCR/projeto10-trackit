import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  return (
    <>
      <Wrapper>
        <Container>
          <Logo>
            <img alt="LogoHome" src={logo} />
          </Logo>
          <Login>
            <form>
              <input
                name="email"
                placeholder="email"
                type="email"
                required
              />
              <input
                name="password"
                placeholder="senha"
                type="password"
                required
              />
               <input
                name="name"
                placeholder="nome"
                type="text"
                required
              />
               <input
                name="photo"
                placeholder="imagem"
                type="img"
                required
              />
              <button type="submit">Cadastrar</button>
            </form>
          </Login>
          <Link to={"/cadastro"}>
            <SignIn>
              <h2>Já tem uma conta? Faça login!</h2>
            </SignIn>
          </Link>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  img {
    width: 180px;
    height: 180px;
  }
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      width: 303px;
      height: 45px;
      border-radius: 5px;
      background-color: #52b6ff;
      font-weight: 400;
      font-size: 21px;
      text-align: center;
      border: none;
      color: #ffffff;
    }
  }

  input {
    font-weight: 400;
    font-size: 20px;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    color: #d4d4d4;
    border: 1px solid #d4d4d4;
    background-color: #ffffff;
    margin-bottom: 6px;
  }
`;

const SignIn = styled.div`
  h2 {
    margin-top: 6px;
    text-decoration: underline;
    font-family: "Lexend Deca", sans-serif;
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
  }
`;
