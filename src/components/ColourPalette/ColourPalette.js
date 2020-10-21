import React from "react";
import styled from "styled-components";
import { getOrDefault } from "../../utils/CommonUtilities";
import ColourComponent from "../ColourComponent/ColourComponent";

import styles from "./ColourPalette.module.css";

const ColourPalette = (props) => {
  const Wrappper = styled.div`
    width: 80%;
    display: inline-block;
    margin: 0;
    padding:0;'
  `;

  if (!props.data) {
    return;
  }

  const currentProfile = getOrDefault(props.data, props.index, []);

  if (currentProfile.length < 1) return <div>Empty</div>;

  const colours = currentProfile.colours.map((colour) => (
    <ColourComponent
      key={colour.id}
      name={colour.name}
      hexCode={colour.hexCode}
      textColour={colour.inverse}
      shadowColour={colour.secondary}
    ></ColourComponent>
  ));

  return <Wrappper className={styles.palette}>{colours}</Wrappper>;
};

export default ColourPalette;
