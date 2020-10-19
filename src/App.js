import React, { useEffect, useState } from "react";
import "./App.css";

import "./components/ColourComponent/ColourComponent";
import ColourPalette from "./components/ColourPalette/ColourPalette";

import data from "./data/Color.json";

const App = () => {
  const [colourDb, setColourDb] = useState(null);
  const [currentProfile, ] = useState(0);

  useEffect(() => {
    if (colourDb) return;

    let colourProfiles = new Map();

    data.forEach((profile) => {
      colourProfiles.set(profile.id, profile);
    });

    setColourDb(colourProfiles);
  }, [colourDb]);

  if (colourDb)
    return (
      <div>
        <ColourPalette data={colourDb} index={currentProfile}></ColourPalette>
      </div>
    );
  else return <div>Loading</div>;
};

export default App;
