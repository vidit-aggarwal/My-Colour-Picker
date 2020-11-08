import React from "react";
import { getOrDefault } from "../../utils/CommonUtilities";
import ColourComponent from "../ColourComponent/ColourComponent";

import styles from "./ColourPalette.module.css";

const ColourPalette = (props) => {

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

  return <div className={styles.palette}>{colours}</div>;
};

export default ColourPalette;
