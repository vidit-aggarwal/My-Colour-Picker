import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import style from "./HamburgerWrapper.module.css";

const Content = styled.div`
  ${(props) => (props.open ? props.background : "")}
`;

const background = `  background: rgb(255, 255, 255);
background: radial-gradient(
  circle at top left,
  rgba(255, 255, 255, 1) 0%,
  rgba(255, 255, 255, 0.8) 33%,
  rgba(255, 255, 255, 0.6) 66%,
  rgba(255, 255, 255, 0.3) 75%,
  rgba(255, 255, 255, 0) 100%
);`;

const HamburgerWrapper = ({ open, setOpen }) => {
  return (
    <Content
      open={open}
      className={style.HamburgerWrapper}
      background={background}
    >
      <Hamburger open={open} setOpen={setOpen}></Hamburger>
    </Content>
  );
};

export default HamburgerWrapper;
