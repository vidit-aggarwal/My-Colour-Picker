import React from "react";
import styled from "styled-components";

const SidebarEntry = (props) => {
  const Wrapper = styled.div`
    width: ${props.active ? "99%" : "100%"};
    height: ${props.active ? "96px": "100px"};
    color: lightblue;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    background-color: ${props.backgroundColour};
    font-weight: bold;
    font-size: 2.5rem;
    font-outline: black;
    transition: all 0.5s ease-out;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    border: ${props.active ? "2px groove " + props.inverse : "none"};

    &:hover {
      backdrop-filter: blur(10px);
      background: url(${props.backgroundImage});
      background-color: ${props.backgroundColour};
      background-size: cover;
      background-position: center;
      transition: all 0.5s ease-out;
    }
  `;

  const Content = styled.div`
    align-self: center;
  `;

  return (
    <Wrapper onClick={props.changeProfile}>
      <Content>{props.name}</Content>
    </Wrapper>
  );
};

export default SidebarEntry;
