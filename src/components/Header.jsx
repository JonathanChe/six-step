import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  height: 5vh;
  width: 100vw;
  background-color: red;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 1.5rem;

  a:nth-child(1) {
    padding-left: 1%;
    outline: none;
    text-decoration: none;
    color: white;

    &:hover {
      transform: scale(1.1);
    }
  }

  a:nth-child(2) {
    margin-left: auto;
    padding-right: 1%;
    text-decoration: none;
    color: white;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <NavLink to="/">six-step</NavLink>
      <NavLink to="/about">About</NavLink>
    </HeaderStyles>
  )
};

export default Header;
