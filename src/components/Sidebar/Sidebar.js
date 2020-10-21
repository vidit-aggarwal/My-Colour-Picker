import React from "react";
import styled from "styled-components";
import SidebarEntry from "./SidebarEntry/SidebarEntry";

const Sidebar = (props) => {
  if (!props.data || props.data.length < 1) return;

  console.log(props.data);

  const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    y-overflow: scroll;
    width: 20%;
    height: 100vh;
  `;
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

  return <Wrapper>{content}</Wrapper>;
};

export default Sidebar;
