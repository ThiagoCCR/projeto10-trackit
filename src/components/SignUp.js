import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signUpAPI } from "../services/trackit";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleSignUp(e) {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    signUpAPI(formData)
      .then((res) => {
        setTimeout(setIsLoading(false), 3000);
        navigate("/");
      })
      .catch(() => {
        setFormData({
          email: "",
          password: "",
          name: "",
          image: "",
        });
        alert("Erro na API...");
        setTimeout(setIsLoading(false), 3000);
      });
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Logo>
            <img alt="LogoHome" src={logo} />
          </Logo>
          <Login>
            <form onSubmit={handleSignUp}>
              <input
                name="email"
                placeholder="email"
                type="email"
                disabled={isLoading}
                onChange={handleInputChange}
                value={formData.email}
                required
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="senha"
                type="password"
                disabled={isLoading}
                required
              />
              <input
                name="name"
                placeholder="nome"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                disabled={isLoading}
                required
              />
              <input
                name="image"
                value={formData.imagee}
                onChange={handleInputChange}
                placeholder="imagem"
                type="img"
                disabled={isLoading}
                required
              />
              <button type="submit">
                {isLoading ? (
                  <div>
                    <ThreeDots color="#ffffff" />
                  </div>
                ) : (
                  <p>Cadastrar</p>
                )}
              </button>
            </form>
          </Login>
          <Link to={"/"}>
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
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      }
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
