import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
    width:100%;
    height: 300px;
    border-radius: 15px;
    background: rgb(168,168,168);
    background: linear-gradient(335deg, rgba(168,168,168,1) 0%, rgba(217,217,217,1) 53%, rgba(236,236,236,1) 100%);
    box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
    transition: 0.5s ease;
    display: grid;
    text-align: center;
    overflow: hidden;
    font-family: Cabin, "Open Sans", sans-serif;

    &:hover{
        transform: scale(1.1);
        box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
        cursor: pointer;
    }
    
    @media only screen 
    and (max-width: 768px) {
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
    position: relative;
    bottom: 10px;

    @media only screen 
    and (max-width: 768px) {
        bottom: 30px;
    }
`;

const Text = styled.p`
    text-align: center;
    color: black;
    max-width: 90%;
    margin: auto;
`;

const TextContainer = styled.div`
    display: inline-block;
`;

const DateText = styled.p`
    display: inline;
    font-family:'Roboto', sans-serif;
    margin-right: 5px;
    margin-left: 10px;
`;

const TextSinceOrUntil = styled.p`
    display: inline;
`;

const Card = ({image, alternativeText, title, text, since, until}) => {

    return (
        <CardContainer>
            <Image src={image} alt={alternativeText}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <TextContainer>
                <DateText>SINCE:</DateText><TextSinceOrUntil>{since}</TextSinceOrUntil>
                <DateText>UNTIL:</DateText><TextSinceOrUntil>{until}</TextSinceOrUntil>
            </TextContainer>
        </CardContainer>
    )
}

export default Card
