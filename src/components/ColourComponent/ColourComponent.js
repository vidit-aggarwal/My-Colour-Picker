import React from "react";
import styled from "styled-components";
import { rgb } from "polished";
import { hexToRgb, copyText } from "./../../utils/CommonUtilities";
import styles from "./ColourComponent.module.css";

function ColourComponent(props) {
  var hasSecondary = false;
  if (props.shadowColour) hasSecondary = true;

  const shadow = `
        -webkit-box-shadow: inset 0 -50px 40px -20px ${props.shadowColour};
        -moz-box-shadow: inset 0 -50px 40px -20px ${props.shadowColour};
        box-shadow: inset 0 -50px 40px -20px ${props.shadowColour};
      `;

  if (props.hexCode) {
    const Wrapper = styled.div`
      background-color: ${rgb(...hexToRgb(props.hexCode))};
      color: ${props.textColour ? props.textColour : "white"};
      font-size: 1em;
      ${hasSecondary ? shadow : ""}
    `;

    const name = props.name ? props.name : "Not Found";
    const hexCode = props.hexCode;

    return (
      <Wrapper
        className={styles.card}
        onClick={() => {
          copyText(hexCode);
        }}
      >
        <div className={styles.content}>
          <p>{name}</p>
          <p>{hexCode}</p>
        </div>
      </Wrapper>
    );
  } else {
    return;
  }
}

export default ColourComponent;
