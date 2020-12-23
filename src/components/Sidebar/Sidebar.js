import React from "react";
import SidebarEntry from "./SidebarEntry/SidebarEntry";

import style from "./Sidebar.module.css";

const Sidebar = (props) => {
  if (!props.data || props.data.length < 1) return;

  const content = [];
  props.data.forEach((key, value) => {
    content.push(
      <SidebarEntry
        name={key.name}
        key={"profile__" + key.id}
        backgroundImage={key.backgroundImage}
        backgroundColour={key.backgroundColour}
        inverse={key.inverse}
        changeProfile={() => {
          props.changeProfile(key.id);
        }}
        active={props.currentProfile === key.id}
      >
      </SidebarEntry>
    );
  });

  return (
    <div
      open={props.open}
      className={`${style.Sidebar} ${props.open ? style.Active : style.Close}`}
    >
      {content}
    </div>
  );
};

export default Sidebar;
