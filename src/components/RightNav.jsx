import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-right: 40px;
    margin-top: 25px;

    li {
        font-family: Cabin, "Open Sans", sans-serif;
        font-size: 20px;
        font-weight: normal;
        padding-right: 20px;
        display: inline-block;
        color: black;

        &:hover {
            cursor: pointer;
        }
        
        &::after{
            content: '';
            display: block;
            width: 0;
            height: 5px;
            background: red;
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
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 39%, rgba(212,212,212,1) 100%);
        border-bottom: 2px solid #E0E0E0;
        position: absolute;
        transform: ${({open}) => open? 'translateY(0)' : 'translateY(20%)'};
        top: 50px;
        right: -50px;
        padding-bottom: 20px;
        padding-top: 20px;
        width: 100%;
        transition: transform 0.3s ease-in-out;

        li {
            color: black;
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
