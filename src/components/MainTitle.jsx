import React from 'react'
import styled from '@emotion/styled'


const MainContainer = styled.div`
    height: 90vh;


    img {
        border-radius: 50%;
        border: 7px solid #E0E0E0;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;

    }

    h1 {
        font-family: Cabin, "Open Sans", sans-serif;
        font-size: 65px;
        font-weight: normal;
        text-align: center;
        line-height:10px;
        
        @media(max-width: 768px){
            font-size: 35px;
        }
    }

    h3 {
        font-family: Cabin, "Open Sans", sans-serif;
        font-size: 35px;
        font-weight: normal;
        text-align: center;
        line-height:10px;

        @media(max-width: 768px){
            font-size: 20px;
        }
    }
`;

const MainTitle = () => {
    return (
        <MainContainer>
            <img src={require('../images/tdavison.png')} alt="tdavison"/>
            <h1>Davison Tomás</h1>
            <h3>Software Engineer</h3>
        </MainContainer>
    )
}

export default MainTitle;