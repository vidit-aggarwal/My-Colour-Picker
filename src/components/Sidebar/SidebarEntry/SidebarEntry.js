import React from "react";
import styled from "styled-components";

import styles from "./SidebarEntry.module.css";

const SidebarEntry = (props) => {
  const Wrapper = styled.div`
    width: ${props.active ? "99%" : "100%"};
    height: ${props.active ? "96px" : "100px"};
    background-color: ${props.backgroundColour};
    border: ${props.active ? "2px groove " + props.inverse : "none"};

    &:hover {
      background: url(${props.backgroundImage});
      background-color: ${props.backgroundColour};
      background-size: cover;
      background-position: center;
    }
  `;

  return (
    <Wrapper className={styles.SidebarEntry} onClick={props.changeProfile}>
      <div className={styles.Content}>{props.name}</div>
    </Wrapper>
  );
};

export default SidebarEntry;
