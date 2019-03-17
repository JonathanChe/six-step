import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: #b5b4b3;
`;

const SocialIconsContainer = styled.div`
  display: flex;
`;

const SocialIconStyles = styled.a`
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  margin: 0 5px;
  font-size: 2.5rem;
  text-decoration: none;

  &:visited,
  :active {
    color: inherit;
  }

  &:hover {
    color: white;
  }
`;

const About = () => (
  <AboutStyles>
    <h1>Jonathan Che</h1>
    <SocialIconsContainer>
      <SocialIconStyles href="https://youtube.com/chelikestobboy">
        <i className="fab fa-youtube"></i>
      </SocialIconStyles>
      <SocialIconStyles href="https://github.com/JonathanChe">
        <i className="fab fa-github"></i>
      </SocialIconStyles>
      <SocialIconStyles href="https://www.linkedin.com/in/jonathanche93/">
        <i className="fab fa-linkedin-in"></i>
      </SocialIconStyles>
    </SocialIconsContainer>
  </AboutStyles>
);

export default About;
