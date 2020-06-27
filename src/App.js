import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import TopBackground from './images/top_background.png'

import NavBar from './components/NavBar';
import MainTitle from './components/MainTitle'
import AboutMe from './components/AboutMe'

const HeaderContainer = styled.div`
  position: relative;
  background-image: url(${TopBackground});
  background-position: center;
  width: 100%;
  height: 140vh;

`;

const BodyContainer = styled.div`
  position: relative;
  height: auto;
  top: -200px;

  @media only screen 
  and (orientation: portrait)
  and (max-width: 1024px )
  and (min-width: 768px){
    top: -350px;
  }
`;

const FootContainer = styled.div`
`;

function App() {
  return (
    <Fragment>
      <HeaderContainer>
        <NavBar/>
        <MainTitle/>
      </HeaderContainer>
      <BodyContainer>
        <AboutMe/>
      </BodyContainer>
      <FootContainer>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
      </FootContainer>
    </Fragment>
  );
}

export default App;
