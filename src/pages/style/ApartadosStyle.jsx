import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export const DivTitulo = styled.div`
    display: flex;
    background-color: orange;
    margin-bottom: 2rem;
    align-items: center;
`
export const ImgIconoAbdomen = styled.img `
    height: 80px;
    background-color: white;
    border-radius: 50%;
    border: solid 6px black;
    margin: 10px 20px 10px 50px;
`

export const ContainerDiv = styled(Container)`
    display: flex;
`

export const ColStyle = styled(Col)`
    height: 100px;
`
export const ImgGrande = styled.img `
    border-radius: 5%;
    border: solid 6px orange;
    height: 200px;
    margin-bottom: 1rem;
`

export const LittleImg = styled.img `
    width: 125px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5%;
    margin-left: 1rem;
    border: solid 5px grey;
    transition: border .2s;
    &:hover {
        border: solid 5px orange;
    }
`
export const ButtonsDiv = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

export const ButtonsStyle = styled.button`
margin: 1rem;
    background-color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    border: solid 5px black;
    border-radius: 8%;
    color: white;
    transition: border .4s;
    transition: color .4s;
    transition: background-color .2s;
    &:hover {
        border: solid 5px orange;
        background-color: orange;
        color: black;
    }
` 