import UserContext from "../contexts/UserContext.js";
import { useContext } from "react";
import styled from "styled-components";

export default function Header() {
  const { userData } = useContext(UserContext);

  return (
    <>
      <Wrapper>
        <h1>TrackIt</h1>
        <img alt="UserImg" src={userData.image} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
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
