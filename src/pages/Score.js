import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToGamePage } from "../routes/Coordinator";
import score from "../images/score.png";
import Button from "../components/Button";

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: #1e1e1e;
  margin: 50px;
`;

const ImageContainer = styled.div``;

export default function Score() {
  const history = useHistory();

  return (
    <>
      <Header />
      <CardLayout>
        <ImageContainer>
          <img style={{ width: "500px" }} src={score} />
        </ImageContainer>
        <Button onClicked={() => goToGamePage(history)} label={"Continue"} />
      </CardLayout>
    </>
  );
}
