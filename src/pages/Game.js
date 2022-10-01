import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header";

import games from "../api/games";

const CardContainer = styled.div`
  background-color: #121212 !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export default function Game() {
  return (
    <>
      <Header />
      <CardContainer>
        {games.map((game, index) => (
          <Card key={index} data={game} />
        ))}
      </CardContainer>
    </>
  );
}
