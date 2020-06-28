import React from 'react'
import styled from '@emotion/styled';

const TitleStyle = styled.h1`
    font-family: Cabin, "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: normal;
    color: black;
    border-bottom: 3px solid #FF9300;
    display: inline-block;
    line-height: 0.85;

    animation: 2.5s ease-out 0s 1 opacityMaxSlideIn;

    @keyframes opacityMaxSlideIn {
        0% {
            transform: translateX(-50%);
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const Title = ({title}) => {
    return (
        <>
            <TitleStyle>{title}</TitleStyle>
        </>
    )
}

export default Title
