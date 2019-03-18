import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.main`
  color: #a5a4a2;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 50vh;

  a {
    text-decoration: none;
    color: #b5b4b3;
    font-size: 1.25rem;

    &:hover {
      transform: scale(1.1);
      color: white;
    }
  }
`;

const ErrorPage = () => (
  <ErrorContainer>
    <h1>Page Not Found</h1>
    <Link to="/">Return Home</Link>
  </ErrorContainer>
);

export default ErrorPage;
