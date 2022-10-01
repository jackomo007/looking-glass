import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToGamePage, goToScorePage } from "../routes/Coordinator";
import logo from "../images/logo_circle.png"

const NavBar = styled.div`
  background-color: #292929;
  padding: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Items = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-weight: 500;
`;

const Item = styled.div`
  cursor: pointer;
  :hover {
    background-color: #E77FF9;
    padding: 5px;
    border-radius: 10%;
  }
`;

const ImageContainer = styled.div`

`;


export default function Header() {
  const history = useHistory();

  return (
    <NavBar>
      <ImageContainer><img onClick={() => goToHomePage(history)} style={{ width: '40px' }} src={logo} /></ImageContainer>
      <Items>
        <Item onClick={() => goToHomePage(history)}>Home</Item>
        <Item onClick={() => goToGamePage(history)}>Game</Item>
        <Item onClick={() => goToScorePage(history)}>Score</Item>
      </Items>
    </NavBar>
  );
}
