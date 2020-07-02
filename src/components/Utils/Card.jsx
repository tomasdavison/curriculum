import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';

const CardContainer = styled.div`
    width:100%;
    height: 300px;
    border-radius: 15px;
    background: rgb(168,168,168);
    background: linear-gradient(335deg, rgba(168,168,168,1) 0%, rgba(217,217,217,1) 53%, rgba(236,236,236,1) 100%);
    transition: 0.5s ease;
    display: grid;
    text-align: center;
    overflow: hidden;

    &:hover{
        transform: scale(1.1);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
        cursor: pointer;
    }
    
    @media only screen 
    and (max-width: 768px) {
        width: 300px;
        height: 400px;
    }
`;

const Image = styled.img`
    object-fit: cover;
    width:100%;
    height: 150px;
    border-top-right-radius: 5%;    
    border-top-left-radius: 5%;    
    background-size: cover;
    border-bottom: 1px solid black;
    
    @media only screen 
    and (max-width: 768px) {
        height: 200px;
    }
`;

const Title = styled.h3`

`;

const Text = styled.p`

`;

const Card = ({image, alternativeText}) => {

    return (
        <CardContainer>
            <Image src={image} alt={alternativeText}/>
            <Title>I'm a title</Title>
            <Text>I'm a text</Text>
        </CardContainer>
    )
}

export default Card
