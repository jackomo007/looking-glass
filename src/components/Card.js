import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #1e1e1e;
  width: 18%;
  height: 80%;
  border-radius: 50px;
  padding: 20px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #535050;
  width: 45%;
  height: 6%;
  border-radius: 20px;
  font-size: 2vh;
`;

const Description = styled.div`
  width: 100%;
  height: 35%;
  color: white;
  font-size: 2.0vh;
`;
export default function Card({data}) {
  const history = useHistory()
  return (
    <CardLayout>
      <Timer>
        ⏱️
        <span style={{ color: "white", fontSize: '1vw' }}>{data.time}</span>
      </Timer>
      <img width='100%' height='300vh' src={data.image} alt="test" />
      <Description>
     {data.description}
      </Description>
      <Button onClicked={() => history.push(data.location)} label={data.labelButton}/>
    </CardLayout>
  );
}
