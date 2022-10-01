import React from "react";
import styled from "styled-components";
import "./Home.css";

import telescopesHome from "../api/telescopesHome";
import Header from "../components/Header";

const HomeContainer = styled.div`
  height: 100%;
  background: radial-gradient(ellipse, #1b2735 0%, #090a0f 100%);
  overflow-x: hidden;
  text-align: center;
`;

const TitleHome = styled.p`
  color: #ea80fc;
  font-size: 3rem;
  font-weight: bolder;
`;

const MainContainer = styled.div`
  height: 100vh;
  min-height: 100%;
  margin: 60px;
`;

const TitleMain = styled.h1`
  color: #ea80fc;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 2.5rem;
`;

const ImageMain = styled.img`
  width: 600px;
`;

const DescriptionMain = styled.p`
  color: #fff;
  padding: 20px;
  font-size: 1.4rem;
`;

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <TitleHome>LEARNING THROUGH THE LOOKING GLASS</TitleHome>
        <div id="stars"></div>
        {telescopesHome.map((telescope) => {
          return (
            <MainContainer>
              <TitleMain>{telescope.name}</TitleMain>
              <ImageMain src={telescope.image} />
              <DescriptionMain>{telescope.description}</DescriptionMain>
            </MainContainer>
          );
        })}
      </HomeContainer>
    </>
  );
}
