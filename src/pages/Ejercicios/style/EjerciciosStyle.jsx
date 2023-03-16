import styled from "styled-components";
import Card from 'react-bootstrap/Card';



export const CardsDiv = styled.div `
    display: flex;
    justify-content: center;
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
    border: none;
    transition: border .5s;
    &:hover {
        border: solid 6px darkblue;
    }
`

export const ImgCard = styled(Card.Img)`
    height: 100px;
    margin-bottom: 10px;
`