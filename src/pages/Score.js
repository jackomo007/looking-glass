import React, {useState} from "react";
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
  const [positionY, setPositionY] = useState(34)
  const [rotation, setRotation] = useState(0)
  const [positioX, setPositionX] = useState(0)

  const Movement = () => {
    // top, rotate, margin-left
    const bad = [39, -70, -115]
    const fair = [34, -24, -60]
    const good = [34, 30, 50]
    const awesome = [39, 70, 120]
  }

  return (
    <>
      <Header />
      <CardLayout>
        <ImageContainer>
          <img style={{ width: "500px" }} src={score} />
        </ImageContainer>
        <Control top={`${positionY}vh`} transform={`rotate(${rotation}deg)`} marginLeft={`${positioX}px`}></Control>
        <Button onClicked={() => goToGamePage(history)} label={"Continue"} />
      </CardLayout>
    </>
  );
}
