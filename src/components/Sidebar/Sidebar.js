import React from "react";
import SidebarEntry from "./SidebarEntry/SidebarEntry";

import style from "./Sidebar.module.css";

const Sidebar = (props) => {
  if (!props.data || props.data.length < 1) return;

  console.log(props.data);

  const content = [];
  props.data.forEach((key, value) => {
    console.log("Sidebar elem = ", key, value);
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
        active={props.index === key.id}
      ></SidebarEntry>
    );
  });

  return <div className={style.Sidebar}>{content}</div>;
};

export default Sidebar;
