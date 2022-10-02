import React, { useState, useEffect } from "react";
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
const Control = styled((props) => <div {...props} />)`
  position: absolute;
  width: 0;
  height: 0;
  fill: white;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 150px solid white;
  cursor: pointer;
  margin-left: 0px;
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  margin-left: ${(props) => props.marginLeft};
`;

export default function Score() {
  const history = useHistory();
  const [positionY, setPositionY] = useState(34);
  const [rotation, setRotation] = useState(0);
  const [positioX, setPositionX] = useState(0);

  const Movement = () => {
    // const actualScore = +localStorage.getItem("score");
    const actualScore = 1600;
    if (actualScore) {
      if (actualScore <= 600) {
        setPositionY(290);
        setRotation(-70);
        setPositionX(-115);
      }

      if (600 < actualScore && actualScore <= 800) {
        setPositionY(250);
        setRotation(-24);
        setPositionX(-60);
      }

      if (800 < actualScore && actualScore <= 1000) {
        setPositionY(250);
        setRotation(30);
        setPositionX(50);
      }

      if (actualScore > 1500) {
        setPositionY(290);
        setRotation(70);
        setPositionX(120);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("score") !== null) {
      Movement();
    }
  }, []);

  return (
    <>
      <Header />
      <CardLayout>
        <ImageContainer>
          <img style={{ width: "500px" }} src={score} alt="score" />
        </ImageContainer>
        <Control
          top={`${positionY}px`}
          transform={`rotate(${rotation}deg)`}
          marginLeft={`${positioX}px`}
        ></Control>
        <Button onClicked={() => goToGamePage(history)} label={"Continue Playing!"} />
      </CardLayout>
    </>
  );
}
