import React from "react";
import styled from "styled-components";

import styles from "./SidebarEntry.module.css";

const Wrapper = styled.div`
  width: ${(props) => (props.active ? "99%" : "100%")};
  height: ${(props) => (props.active ? "96px" : "100px")};
  background-color: ${(props) => props.backgroundColour};
  border: ${(props) => (props.active ? "2px groove " + props.inverse : "none")};

  &:hover {
    background: url(${(props) => props.backgroundImage});
    background-color: ${(props) => props.backgroundColour};
    background-size: cover;
    background-position: center;
  }
`;

const SidebarEntry = (props) => {
  return (
    <Wrapper
      className={styles.SidebarEntry}
      active={props.active}
      backgroundColour={props.backgroundColour}
      backgroundImage={props.backgroundImage}
      inverse={props.inverse}
      onClick={props.changeProfile}
    >
      <div className={styles.Content}>{props.name}</div>
    </Wrapper>
  );
};

export default SidebarEntry;
