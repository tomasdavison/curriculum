import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    height: 30px;
    top: 30px;
    margin-left: auto;
    margin-right: 0px;

    div {
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



    @media only screen 
    and (max-width: 768px) {
        display: ${({open}) => open? '' : 'none'};
        flex-flow: column nowrap;
        background: none;
        position: fixed;
        top: 10px;
        left: 10px;
        height: auto;
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

        div {
            color: white;
            text-align:center;

            &:hover {
                cursor: pointer;
                text-shadow: 0px 0px 7px rgba(0,0,0,0.66);
            }
            
            &::after{
                content: '';
            }

            &:hover:after{
                width: 0px;
            }
        }
    }
`;

const RightNav = ({open, setOpen}) => {
    return (
        <Ul
            open={open}
        >
            <div>
                <Link to="about-me" smooth={true} onClick={() => setOpen(false)}>About Me</Link>
            </div>
            <div>
            <Link to="studies" smooth={true} onClick={() => setOpen(false)}>Studies</Link>
            </div>
            <div>
                <Link to="#">Technologies</Link>
            </div>
            <div>
                <Link to="#">Experience</Link>
            </div>
        </Ul> 
    )
}

export default RightNav
