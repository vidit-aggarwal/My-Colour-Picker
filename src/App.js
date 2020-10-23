import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

// Importing Components
import ColourPalette from "./components/ColourPalette/ColourPalette";
import Sidebar from "./components/Sidebar/Sidebar";

// Importing CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

// Importing Extra data
import data from "./data/Color.json";

const App = () => {
  const [colourDb, setColourDb] = useState(null);
  const [currentProfile, setCurrentProfile] = useState(0);

  const Wrapper = styled.div`
    display: flex;
  `;

  const changeProfile = (newProfile) => {
    if (
      newProfile !== currentProfile &&
      newProfile >= 0 &&
      newProfile < data.length
    )
      setCurrentProfile(newProfile);
  };

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
        <Sidebar data={colourDb} changeProfile={changeProfile}></Sidebar>
        <ColourPalette data={colourDb} index={currentProfile}></ColourPalette>
        <ToastContainer
          limit={3}
          newestOnTop={true}
          position="bottom-right"
          draggable={true}
          draggablePercent={50}
          closeButton={false}
          autoClose={2000}
        ></ToastContainer>
      </Wrapper>
    );
  else return <div>Loading</div>;
};

export default App;
