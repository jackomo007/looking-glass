import React from "react";
import styled from "styled-components";

const ButtonLayout = styled((props) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  background-color: #ea80fc;
  border-radius: 20px;
  font-size: ${(props) => props.fontSize ??  "1.5vw" };
  color: white;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.backColor ??  "white" };
    color: ${(props) => props.fontColor ?? "#ea80fc"};
  }
`;

export default function Button({
  label = "Button",
  height = "100%",
  backColor,
  fontSize,
  color,
  onClicked = () => {},
}) {
  return (
    <ButtonLayout
      height={height}
      backColor={backColor}
      fontColor={color}
      fontSize={fontSize}
      onClick={() => onClicked()}
    >
      {label}
    </ButtonLayout>
  );
}
