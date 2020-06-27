import React from 'react'
import styled from '@emotion/styled'
import { Twitter, LinkedIn, GitHub} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const MainContainer = styled.div`
    height: 95vh;

    .header-container {
        position: relative;
        top: 45%;
        -webkit-transform: translateY(-60%);
        -ms-transform: translateY(-60%);
        transform: translateY(-60%);
    }

    .contact-me {
        text-align:center;
    }

    img {
        border-radius: 50%;
        border: 7px solid #E0E0E0;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
        transition: all .3s ease-out;

        &:hover {
            transform: translate(0,-5px);
        }

        @media(max-width: 768px){ 
            width: 250px;
        }

        @media only screen 
        and (min-width: 1024px) 
        and (max-height: 1366px)
        and (-webkit-min-device-pixel-ratio: 1.5){
            width: 400px;
        }
    }

    h1 {
        font-family: Cabin, "Open Sans", sans-serif;
        color: white;
        font-size: 65px;
        font-weight: normal;
        text-align: center;
        animation: 2s ease-out 0s 1 slideInFromBottom;
        
        @media(max-width: 768px){ 
            font-size: 40px;
        }

        @keyframes slideInFromBottom {
            0% {
                transform: translateY(-50%);
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
        color: white;


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
                <div className="contact-me">
                    <IconButton
                        onClick={() => window.open('https://twitter.com/tomydavison')}
                    >
                        <Twitter 
                            style=
                            {{ 
                                fontSize: 40, 
                                color: "white" 
                            }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => window.open('https://www.linkedin.com/in/tom%C3%A1s-guido-davison-970876185/')}
                    >
                        <LinkedIn
                            style=
                            {{ 
                                fontSize: 40, 
                                color: "white" 
                            }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => window.open('https://github.com/tomasdavison')}
                    >
                        <GitHub
                            style=
                            {{ 
                                fontSize: 40, 
                                color: "white" 
                            }}
                        />
                    </IconButton>
                </div>
            </div>
        </MainContainer>
    )
}

export default MainTitle;