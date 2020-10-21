import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

import "./components/ColourComponent/ColourComponent";
import ColourPalette from "./components/ColourPalette/ColourPalette";
import Sidebar from "./components/Sidebar/Sidebar";

import data from "./data/Color.json";

const App = () => {
  const [colourDb, setColourDb] = useState(null);
  const [currentProfile] = useState(0);

  const Wrapper = styled.div`
    display: flex;
  `;

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
      <Wrapper>
        <Sidebar data={colourDb}></Sidebar>
        <ColourPalette data={colourDb} index={currentProfile}></ColourPalette>
      </Wrapper>
    );
  else return <div>Loading</div>;
};

export default App;
