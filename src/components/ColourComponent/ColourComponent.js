import React from "react";
import styled from "styled-components";
import { rgb } from "polished";
import { hexToRgb } from "./../../utils/CommonUtilities";

function ColourComponent(props) {
  if (props.hexCode) {
    const Wrapper = styled.div`
          background-color: ${rgb(...hexToRgb(props.hexCode))};
          color: ${props.textColour ? props.textColour : "white"};
          font-size: 1em;
          margin: 1em;
          padding: 0.25em 1em;
      `;

    const name = props.name ? props.name : "Not Found";
    const hexCode = props.hexCode;

    return (
      <Wrapper>
        <p>{name}</p>
        <p>{hexCode}</p>
      </Wrapper>
    );
  } else {
    return;
  }
}

export default ColourComponent;
