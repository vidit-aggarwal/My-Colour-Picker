import React from "react";
import styled from "styled-components";
import { rgb } from "polished";
import { hexToRgb, copyText } from "./../../utils/CommonUtilities";
import styles from "./ColourComponent.module.css";
import notification from "../Notification/Notification";

const Wrapper = styled.div`
  background-color: ${(props) => rgb(...hexToRgb(props.hexCode))};
  color: ${(props) => (props.textColour ? props.textColour : "white")};
  font-size: 1em;
  ${(props) => (props.hasSecondary ? props.shadow : "")}
`;

function ColourComponent(props) {
  var hasSecondary = false;
  if (props.shadowColour) hasSecondary = true;

  const shadow = `
        -webkit-box-shadow: inset 0 -50px 40px -20px ${props.shadowColour};
        -moz-box-shadow: inset 0 -50px 40px -20px ${props.shadowColour};
        box-shadow: inset 0 -50px 40px -20px ${props.shadowColour};
      `;

  if (props.hexCode) {
    const name = props.name ? props.name : "Not Found";
    const hexCode = props.hexCode;

    return (
      <Wrapper
        hexCode={props.hexCode}
        textColour={props.textColour}
        hasSecondary={hasSecondary}
        shadow={shadow}
        className={styles.card}
        onClick={() => {
          copyText(hexCode, notification);
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
