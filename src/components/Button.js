import React from "react";
import styled from "styled-components";

const ButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8%;
  background-color: #ea80fc;
  border-radius: 20px;
  font-size: 1.5vw;
  color: white;
  cursor: pointer;

  :hover {
    background-color: white;
    color: #ea80fc;
  }
`;

export default function Button({label = 'Button', onClicked = () => {}}) {
  return <ButtonLayout onClick={() => onClicked()}>{label}</ButtonLayout>;
}
