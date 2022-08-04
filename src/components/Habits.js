import styled from "styled-components";
import Menu from "./Menu";

export default function Habits() {
  const url =
    "data:image/jpeg;base64,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";
  
    return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img alt="UserImg" src={url} />
      </Header>
      <Wrapper></Wrapper>
      <Menu/>
      
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  color: #ffffff;
  height: 70px;
  right: 0;
  left: 0;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: "Playball", cursive;
  font-size: 40px;
  z-index: 1;

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;

