import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

// Importing Components
import ColourPalette from "./components/ColourPalette/ColourPalette";
import Sidebar from "./components/Sidebar/Sidebar";
import HamburgerWrapper from "./components/Sidebar/Hamburger/HamburgerWrapper";

// Importing CSS
import style from "./App.module.css";
import "react-toastify/dist/ReactToastify.min.css";

// Importing Extra data
import data from "./data/Color.json";

const App = () => {
  const [colourDb, setColourDb] = useState(null);
  const [currentProfile, setCurrentProfile] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
      <div className={style.App}>
        <HamburgerWrapper
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        ></HamburgerWrapper>
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
      </div>
    );
  else return <div>Loading</div>;
};

export default App;
