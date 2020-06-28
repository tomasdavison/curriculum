import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin-left: 20px;
    animation: 2.5s ease-out 0s 1 opacityMax;
    max-width: 1300px;

    @keyframes opacityMax {
        0% {
            transform: translateX(-50%);
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const Title = styled.h1`
    font-family: Cabin, "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: normal;
    color: black;
    border-bottom: 3px solid #FF9300;
    display: inline-block;
    line-height: 0.85;
`;

const AboutMeDescription = styled.p`
    font-family: Cabin, "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: normal;
    margin-top: 20px;
    margin-right: 20px;
    text-align: justify;
    color: black;

    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
       -moz-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
            
`;

const AboutMe = () => {

    return (
        <Container id="about-me">
            <Title>About Me</Title>
            <AboutMeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</AboutMeDescription>
        </Container>
    );
}


export default AboutMe
