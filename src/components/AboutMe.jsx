import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
    font-family: Cabin, "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: normal;
    margin-left: 20px;
    color: black;
    border-bottom: 3px solid red;
    display: inline-block;
    line-height: 0.85;
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


const AboutMe = () => {

    return (
        <div>
            <Title>About Me</Title>
            
        </div>
    );
}


export default AboutMe
