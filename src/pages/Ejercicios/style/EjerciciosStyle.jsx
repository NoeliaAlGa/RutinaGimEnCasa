import styled from "styled-components";
import Card from 'react-bootstrap/Card';

export const DivEjercicios = styled.div `
    background-color: lightgray;
    height: 450px;
    border-radius: 20px;
` 

export const CardsDiv = styled.div `
    display: flex;
    justify-content: center;
`
export const H1Style = styled.h1 `
    background-color: orange;
    padding: 10px;
`
export const CardDiv = styled(Card) `
    background-color: white;
    width: fit-content;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    border-radius: 10%;
    font-weight: bolder;
    font-size: large;
    border: solid 6px black;
    transition: border .5s;
    &:hover {
        border: solid 6px orange;
    }
`

export const ImgCard = styled(Card.Img)`
    height: 100px;
    margin-bottom: 10px;
`