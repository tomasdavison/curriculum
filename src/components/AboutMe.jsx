import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin-left: 20px;
    animation: 2.5s ease-out 0s 1 opacityMax;

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
    border-bottom: 3px solid red;
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
        <Container>
            <Title>About Me</Title>
            <AboutMeDescription>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</AboutMeDescription>
        </Container>
    );
}


export default AboutMe
