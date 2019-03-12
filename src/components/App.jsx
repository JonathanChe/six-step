import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Routes from './Routes';


const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
    </>
  )
}


export default App;
