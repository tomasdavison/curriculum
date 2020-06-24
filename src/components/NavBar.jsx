import React from 'react'
import styled from '@emotion/styled'
import Burger from './Burger';

const Nav = styled.nav`
    background: none;
    height:75px;
    position: float;
    display: flex;
    justify-content: space-between;

    .logo {
        width: 65px;
        fill:red;

        &:hover {
            cursor: pointer;
        }
    }
`;



const NavBar = () => {
    return ( 
        <Nav>
            <img src={require('../images/logo.svg')} alt="Logo" className="logo"/>
            <Burger />
        </Nav>
    );
}
 
export default NavBar;