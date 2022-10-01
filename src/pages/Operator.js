import { useState } from "react";
import styled from "styled-components";
import {
  FaSearchMinus,
  FaSearchPlus,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaInfo,
  FaUndo,
  FaRedo,
} from "react-icons/fa";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

import telescopes from "../api/telescopes";
import Header from '../components/Header';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding: 0;
  margin: 0;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 200px;
  height: 75vh;
  padding: 20px;
  z-index: 3;
`;

const Horizontal = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-around;
  margin-left: 45px;
`;

const UpArrow = styled.div`
  width: 0;
  height: 0;
  fill: white;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid white;
  cursor: pointer;
  margin-left: 80px;
  :hover {
    fill: #ea80fc;
    border-bottom: 15px solid #ea80fc;
  }
`;

const LeftArrow = styled.div`
  width: 0;
  height: 0;
  fill: white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid white;
  cursor: pointer;
  :hover {
    fill: #ea80fc;
    border-right: 15px solid #ea80fc;
  }
`;

const RightArrow = styled.div`
  width: 0;
  height: 0;
  fill: white;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid white;
  cursor: pointer;
  margin-left: 80px;
  :hover {
    fill: #ea80fc;
    border-left: 15px solid #ea80fc;
  }
`;

const DownArrow = styled.div`
  width: 0;
  height: 0;
  fill: white;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;

  cursor: pointer;
  margin-left: 80px;
  :hover {
    fill: #ea80fc;
    border-top: 15px solid #ea80fc;
  }
`;
const randomNumber = Math.floor(Math.random() * 37);
const info = {
  image: telescopes[randomNumber].image,
  mission: telescopes[randomNumber].miniature,
  y: telescopes[randomNumber].coordinates.y,
  x: telescopes[randomNumber].coordinates.x,
  z: telescopes[randomNumber].coordinates.z,
  r: telescopes[randomNumber].coordinates.r,
  description: telescopes[randomNumber].description,
};

export default function Operator() {
  const [winner, setWinner] = useState(false);
  const [x, setX] = useState(300);
  const [y, setY] = useState(406);
  const [zoom, setZoom] = useState(1);
  const [s, setS] = useState(2);
  const [rotation, setRotation] = useState(0);
  const [data, setData] = useState(info)
  const rotate = (control) => {
    const newRotation = control
      ? rotation + 90
      : rotation !== 0
      ? rotation - 90
      : 0;
    setRotation(newRotation);
  };

  const move = (axis, control) => {
    if (axis === "x") {
      const newMove = control ? x + s : x - s;
      setX(newMove);
    } else {
      const newMove = control ? y + s : y - s;
      setY(newMove);
    }
  };

  const zoomControl = (control) => {
    const newZoom = control
      ? Math.round((zoom + 0.1) * 100) / 100
      : Math.round((zoom - 0.1) * 100) / 100;
    setZoom(newZoom);
  };

  const speed = (control) => {
    const speedValue = control ? s * 2 : s === 2 ? 2 : s / 2;
    setS(speedValue);
    const message = control ? "Increased Speed" : "Decreased Speed";
    Swal.fire({
      position: "top-center",
      icon: "info",
      title: message,
      showConfirmButton: false,
    });
  };

  const showInfo = () => {
    Swal.fire({
      position: "top-center",
      icon: "info",
      title: "About this image:",
      text: data?.description,
      showConfirmButton: false,
    });
  };

  const submit = () => {
    const alignY = y - 4 <= data.y || data.y >= y + 4;
    const alingX = x - 4 <= data.x || data.x >= x + 4;
    if (alignY && alingX && zoom === data.z && rotation === data.r) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title:
          "Congratulations!, you are officilaly an Satellite Operator Engineer.",
        showConfirmButton: false,
      });
      setWinner(true);
      setTimeout(() => {
        setWinner(false);
      }, 10000);
    } else {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "You already has not completed the mission.",
        showConfirmButton: false,
      });
    }
  };

  const End = () =>
    winner && (
      <Confetti
        width="1500vw"
        height={800}
        colors={["#EA80FC", "white"]}
        style={{ position: "absolute", zIndex: 5 }}
      />
    );

  const resetActualGame = () => {
    setX(300);
    setY(406);
    setRotation(0);
    setZoom(1);
    setS(2);
  };

  return (
    <>
      <Header />
      <Container>
        <Intro>
          <h1 style={{ color: "white", margin: "auto" }}>
            Welcome to the Satellite Operator Control Academy
          </h1>
          <p style={{ color: "white", margin: "auto" }}>
            In this game you are trying to gain the title of{" "}
            <span style={{ color: "#EA80FC" }}>
              "Satellite Operator Engineer"
            </span>
          </p>
          <p style={{ color: "white", margin: "auto" }}>
            To achive this, you must{" "}
            <span style={{ color: "#EA80FC" }}>
              {" "}
              try to capture the sample image of the left{" "}
            </span>
            using a red reactangle in the right image, using the focus{" "}
            <span style={{ color: "#EA80FC" }}>controls on the left panel</span>
          </p>
          <p style={{ color: "white", margin: "auto" }}>
            Once you belive that the{" "}
            <span style={{ color: "red" }}>red reactangle</span> is correctly
            positionated, click on
            <span style={{ color: "greenyellow" }}>
              {" "}
              the green button "Done"
            </span>{" "}
            , if you missing the control of the focus try to reset the game with{" "}
            <span style={{ color: "red" }}> the red button "Reset"</span>
          </p>
          <p style={{ color: "white", margin: "auto" }}>
            But, if you want to try with another mission, try with{" "}
            <span style={{ color: "yellow" }}>
              {" "}
              the yellow button "Try next".
            </span>
          </p>
        </Intro>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <Controls>
            <p
              style={{
                color: "#EA80FC",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                marginTop: 0,
              }}
            >
              The mission:
            </p>
            <img width="200" height="100" src={data.mission} alt="example" />
            <br />
            <UpArrow onClick={() => move("y", false)}></UpArrow>
            <Horizontal>
              <LeftArrow onClick={() => move("x", false)}></LeftArrow>
              <RightArrow onClick={() => move("x", true)}></RightArrow>
            </Horizontal>
            <DownArrow onClick={() => move("y", true)}></DownArrow>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FaAngleDoubleLeft
                onClick={() => speed(false)}
                color="#EA80FC"
                size={30}
                style={{ cursor: "pointer" }}
              />
              <span style={{ color: "white" }}>Speed {s}X</span>
              <FaAngleDoubleRight
                onClick={() => speed(true)}
                color="#EA80FC"
                size={30}
                style={{ cursor: "pointer" }}
              />
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FaUndo
                onClick={() => rotate(false)}
                color="#EA80FC"
                size={20}
                style={{ cursor: "pointer" }}
              />
              <span style={{ color: "white" }}>Rotation {rotation}°</span>
              <FaRedo
                onClick={() => rotate(true)}
                color="#EA80FC"
                size={20}
                style={{ cursor: "pointer" }}
              />
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FaSearchMinus
                onClick={() => zoomControl(false)}
                color="#EA80FC"
                size={20}
                style={{ cursor: "pointer" }}
              />
              <span style={{ color: "white" }}>Zoom {zoom}%</span>
              <FaSearchPlus
                onClick={() => zoomControl(true)}
                color="#EA80FC"
                size={20}
                style={{ cursor: "pointer" }}
              />
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                onClick={() => showInfo()}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaInfo color="#EA80FC" />
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "greenyellow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={submit}
              >
                Done
              </div>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
                onClick={() => resetActualGame()}
              >
                Restart
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  fontSize: "11px",
                  padding: "2px",
                  fontWeight: "bold",
                }}
                onClick={() => window.location.reload()}
              >
                Try next
              </div>
            </div>
          </Controls>
          <div style={{ marginLeft: "2vw" }}>
            <div
              style={{
                border: "solid red",
                width: "200px",
                height: "100px",
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
                zIndex: 2,
              }}
            ></div>
            <img
              style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }}
              width="800"
              height="500"
              src={data.image}
              alt="example"
            />
          </div>
        </div>
        <End />
      </Container>
    </>
  );
}
