import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import { ThreeDots } from "react-loader-spinner";
import { SignInAPI } from "../services/trackit";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const objAPI = { email: email, password: password };
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("USER") !== null) {
      let data = JSON.parse(localStorage.getItem("USER"));
      setUserData({ ...userData, image: data.image, token: data.token });
      navigate("/hoje");
    }
  }, [navigate, setUserData, userData]);

  function handleData(e) {
    e.preventDefault();
    setIsLoading(true);

    SignInAPI(objAPI)
      .then((res) => {
        setUserData({
          ...userData,
          image: res.data.image,
          token: res.data.token,
        });
        window.scrollTo(0, 0);
        localStorage.setItem(
          "USER",
          JSON.stringify({
            token: res.data.token,
            image: res.data.image,
            timestamp: +new Date(),
          })
        );
        setTimeout(navigate("/hoje"), 2000);
      })
      .catch((error) => {
        SetEmail("");
        SetPassword("");
        alert(error);
        setIsLoading(false);
      });
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
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="email"
                type="email"
                disabled={isLoading}
                required
              />
              <input
                name="password"
                onChange={(e) => SetPassword(e.target.value)}
                placeholder="senha"
                type="password"
                disabled={isLoading}
                required
              />
              <button type="submit">
                {isLoading ? (
                  <div>
                    <ThreeDots color="#ffffff" />
                  </div>
                ) : (
                  <p>Entrar</p>
                )}
              </button>
            </form>
          </Login>
          <Link to={"/cadastro"}>
            <SignUp>
              <h2>Não tem uma conta? Cadastre-se!</h2>
            </SignUp>
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

const SignUp = styled.div`
  h2 {
    margin-top: 6px;
    text-decoration: underline;
    font-family: "Lexend Deca", sans-serif;
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
  }
`;
