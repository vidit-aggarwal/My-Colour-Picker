import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import style from "./HamburgerWrapper.module.css";

const Content = styled.div`
  background: ${({ open }) => (open ? "#EFFFFA" : "transparent")};
  box-shadow: ${({ open }) => (open ? "0px 0 4px 4px white" : "")};
`;

const HamburgerWrapper = ({ open, setOpen }) => {
  return (
    <Content open={open} className={style.HamburgerWrapper}>
      <Hamburger open={open} setOpen={setOpen}></Hamburger>
    </Content>
  );
};

export default HamburgerWrapper;
