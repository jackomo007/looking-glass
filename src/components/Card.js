import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1e1e1e;
  width: 18%;
  height: 80%;
  border-radius: 50px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #535050;
  width: 45%;
  height: 100%;
  border-radius: 20px;
  font-size: 2vh;
`;

const Title = styled.div`
  font-size: 4.0vh;
  color:  #ea80fc;
  text-align: center;
`

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
      <Row>

      <Timer>
        ⏱️
        <span style={{ color: "white", fontSize: '1vw' }}>{data.time}</span>
      </Timer>
      <Timer>
        🏆
        <span style={{ color: "white", fontSize: '1vw' }}>{data.score}</span>
      </Timer>
      </Row>
      <img width='100%' height='300vh' src={data?.image} alt="test" />
      <Title>{data?.title}</Title>
      <Description>
     {data?.description}
      </Description>
      <Button height="10%" onClicked={() => history.push(data?.location)} label={data?.labelButton}/>
    </CardLayout>
  );
}
