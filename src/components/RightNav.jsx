import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    top: 30px;
    left: 75%;

    li {
        font-family: Cabin, "Open Sans", sans-serif;
        font-size: 21px;
        font-weight: normal;
        padding-right: 20px;
        display: inline-block;
        color: white;
        text-shadow: 0px 0px 1px #FFFFFF;


        &:hover {
            cursor: pointer;
        }
        
        &::after{
            content: '';
            display: block;
            width: 0;
            height: 5px;
            background: #FF9300;
            transition: width .3s;
        }

        &:hover:after{
            width: 100%;
            transition: width .3s;
        }
    }

    @media(max-width: 768px){
        display: ${({open}) => open? '' : 'none'};
        flex-flow: column nowrap;background: rgb(255,255,255);
        background: none;
        position: fixed;
        top: 10px;
        left: 10px;
        padding-bottom: 20px;
        padding-top: 20px;
        width: 100%;
        z-index:19;
        animation: 0.5s ease-out 0s 1 slideInFromBottom;

        @keyframes slideInFromBottom {
            0% {
                transform: translateY(-50%);
            }
            100% {
                transform: translateY(0);
            }
        }

        li {
            color: white;
            text-align:center;

            &:hover {
                cursor: pointer;
                text-shadow: 0px 0px 7px rgba(0,0,0,0.66);
            }
            
            &::after{
                content: '';
                width: 0;
            }

            &:hover:after{
                width: 0px;
            }
        }
    }
`;

const RightNav = ({open}) => {
    return (
        <Ul
            open={open}
        >
            <li href="#">About Me</li>
            <li href="#">Studies</li>
            <li href="#">Tecnologies</li>
            <li href="#">Experience</li>
        </Ul> 
    )
}

export default RightNav
