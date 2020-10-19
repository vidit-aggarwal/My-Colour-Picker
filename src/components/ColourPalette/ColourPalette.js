import React from "react";
import { getOrDefault } from "../../utils/CommonUtilities";
import ColourComponent from "../ColourComponent/ColourComponent";

const ColourPalette = (props) => {
  if (!props.data) {
    return;
  }

  const currentProfile = getOrDefault(props.data, props.index, []);

  console.log(currentProfile);

  if (currentProfile.length < 1) return <div>Empty</div>;

  const colours = currentProfile.colours.map((colour) => (
    <ColourComponent
      key={colour.id}
      name={colour.name}
      hexCode={colour.hexCode}
      textColour={colour.inverse}
    ></ColourComponent>
  ));

  return colours;
};

export default ColourPalette;
