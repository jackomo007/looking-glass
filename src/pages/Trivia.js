import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

import Button from "../components/Button";
import telescopes from "../api/telescopes";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2vw 10vw;
`;
const Row = styled((props) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: ${(props) => props.margin};
  height: ${(props) => props.height};
  justify-content: center;
`;
const Description = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2vh;
  color: white;
`;

export default function Trivia() {
  const [questions, setQuestions] = useState([]);
  const [control, setControl] = useState(0);
  const [winner, setWinner] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const createRounds = () => {
    const elements = [];
    for (let index = 0; index < 9; index++) {
      elements.push(telescopes[index]);
    }
    setQuestions(elements);
  };

  const verifyAnswer = (answer, value) => {
    if (answer === value) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Very good!",
        showConfirmButton: false,
      });
      setCorrectAnswer(correctAnswer + 1);
    } else {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Sorry, try the next one.",
        showConfirmButton: false,
      });
    }

    if (control === 9) {
      if (correctAnswer > 4) {
        const actualScore = localStorage.getItem("score");
        if (!actualScore) {
          localStorage.setItem("score", 100);
        } else {
          localStorage.setItem("score", +actualScore + 100);
        }
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Awesome!",
          text: "You are genious, an expert in Space Telescopes!",
          showConfirmButton: false,
        });
        setWinner(true);
        setTimeout(() => {
          setWinner(false);
        }, 9000);
        window.location.reload();
      }
    } else {
      setControl(control + 1);
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

  useEffect(() => {
    createRounds();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Description>{questions[control]?.description}</Description>
        <Row margin="0 10%">
          <img
            width="1200vw"
            height="350vh"
            src={questions[control]?.image}
            alt="test"
          />
        </Row>
        <Row height="50px">
          <Button
            label={questions[control]?.options[0]}
            onClicked={() =>
              verifyAnswer(
                questions[control]?.answer,
                questions[control]?.options[0]
              )
            }
          />
          <div style={{ width: "100px" }}></div>
          <Button
            label={questions[control]?.options[1]}
            onClicked={() =>
              verifyAnswer(
                questions[control]?.answer,
                questions[control]?.options[1]
              )
            }
          />
        </Row>
        <Row height="50px">
          <Button
            label={questions[control]?.options[2]}
            onClicked={() =>
              verifyAnswer(
                questions[control]?.answer,
                questions[control]?.options[2]
              )
            }
          />
          <div style={{ width: "100px" }}></div>
          <Button
            label={questions[control]?.options[3]}
            onClicked={() =>
              verifyAnswer(
                questions[control]?.answer,
                questions[control]?.options[3]
              )
            }
          />
        </Row>
        <Row height="20px">
          <div
            style={{
              width: "50px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "greenyellow",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => window.location.reload()}
          >
            Reset
          </div>
        </Row>
        <End />
      </Container>
    </>
  );
}
