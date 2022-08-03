import styled from "styled-components";
import logo from "../assets/img/logo.png";
import {Link, useNavigate} from "react-router-dom"

export default function Home() {

  function handleData(e) {
    e.preventDefault();
    

  }

  return (
    <>
      <Wrapper>
        <Container>
          <Logo>
            <img alt="LogoHome" src={logo} />
          </Logo>
          <Login>
            <form onSubmit={handleData}>
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
              <button type="submit">Entrar</button>
            </form>
          </Login>
          <Link to={"/cadastro"}>
            <SignUp><h2>Não tem uma conta? Cadastre-se!</h2></SignUp>
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
      button{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        background-color: #52B6FF;
        font-weight: 400;
        font-size: 21px;
        text-align: center;
        border: none;
        color: #FFFFFF;
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

const SignUp = styled.div`

    h2{
      margin-top: 6px;
      text-decoration: underline;
      font-family:'Lexend Deca', sans-serif;
      color: #52B6FF;
      font-size: 14px;
      font-weight: 400;
    }


`