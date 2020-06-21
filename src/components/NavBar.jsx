import React from 'react'
import styled from '@emotion/styled'

const Logo = styled.img`
    width: 65px;
    fill:red;
`;

const Container = styled.div`
    background: rgb(0,0,0);
    padding: 5px;
    height:75px;
    position: float;
`;

const ContainerLinks = styled.div`
    float: right;
    margin-right: 60px;
    margin-top: 25px;
`;

const Links = styled.a`
    font-family: Cabin, "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: normal;
    margin-right: 20px;
    display: inline-block;

    color: white;
    text-decoration: none;
    
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
`;


const NavBar = () => {
    return ( 
        <Container>
            <Logo src={require('../images/logo.svg')} alt="Logo"/>
            <ContainerLinks>
                <Links href="#">About Me</Links>
                <Links href="#">Studies</Links>
                <Links href="#">Tecnologies</Links>
                <Links href="#">Experience</Links>
            </ContainerLinks>
        </Container>
    );
}
 
export default NavBar;