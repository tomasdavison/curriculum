import React from 'react'
import styled from '@emotion/styled'


const MainContainer = styled.div`
    height: 90vh;

    .header-container {
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-60%);
        -ms-transform: translateY(-60%);
        transform: translateY(-60%);
    }

    img {
        border-radius: 50%;
        border: 7px solid #E0E0E0;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        transition: all .3s ease-out;

        &:hover {
            transform: translate(0,-5px);
        }

        @media(max-width: 768px){ 
            width: 60%;
        }

    }

    h1 {
        font-family: Cabin, "Open Sans", sans-serif;
        font-size: 65px;
        font-weight: normal;
        text-align: center;
        line-height:10px;
        animation: 2s ease-out 0s 1 slideInFromBottom;
        
        @media(max-width: 768px){ 
            font-size: 40px;
        }

        @keyframes slideInFromBottom {
            0% {
                transform: translateY(-100%);
            }
            100% {
                transform: translateY(0);
            }
        }
    }

    h3 {
        font-family: Cabin, "Open Sans", sans-serif;
        font-size: 35px;
        font-weight: normal;
        text-align: center;
        line-height:10px;

        @media(max-width: 768px){
            font-size: 22px;
        }
    }
`;

const MainTitle = () => {
    return (
        <MainContainer>
            <div className="header-container">
                <img src={require('../images/tdavison.png')} alt="tdavison"/>
                <h1>Davison Tomás</h1>
                <h3>Software Engineer</h3>
            </div>
        </MainContainer>
    )
}

export default MainTitle;