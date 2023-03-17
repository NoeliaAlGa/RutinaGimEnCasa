import styled from "styled-components";

export const BodyHome = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgLogo = styled.img`
    height: 250px;
`
export const BtnHome = styled.button `
    background-color: black;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    border: none;
    border-radius: 5px;
    height: 2rem;
    transition: background-color .5s;
    padding: 10px;
    margin-bottom: 2rem;
    &:hover {
        background-color: orange;
        color: black;
    }
`