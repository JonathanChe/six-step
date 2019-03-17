import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  height: 7.5vh;
  width: 100vw;
  border-bottom: 0.25px solid #545454;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    border: 0.25px solid #545454;
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a5a4a2;

    &:hover {
      color: white;
      font-size: 1.15rem;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <NavLink to="/">SIX-STEP</NavLink>
      <NavLink to="/sets">SETS</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
    </HeaderStyles>
  )
};

export default Header;
