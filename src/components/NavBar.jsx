import React from 'react'
import styled from '@emotion/styled'
import Burger from './Burger';

const Nav = styled.nav`
    background: none;
    height:75px;
    position: float;
    display: flex;
    justify-content: space-between;
`;



const NavBar = () => {
    return ( 
        <Nav>
            <Burger />
        </Nav>
    );
}
 
export default NavBar;