import React, { useState } from 'react';
import styled from '@emotion/styled';
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 25%;
    left: 85%;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1.5)
    and (orientation:portrait){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        top: 25%;
        left: 90%;
    }

    div {
        width: 2rem;
        height: 0.25rem; 
        background-color: ${( { open } ) => open ? '#ccc' : '#fff' };
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger 
                open={open} 
                onClick={() => setOpen(!open)}
            >
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav 
                open={open}
            />
        </>
    )
}

export default Burger
