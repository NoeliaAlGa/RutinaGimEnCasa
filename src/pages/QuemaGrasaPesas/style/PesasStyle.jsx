import styled from "styled-components";

export const ImgPesasLittle = styled.img`
    height: 50px;
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

export const ButtonsDivPesas = styled.div `
    display: flex;
    justify-content: center;
    margin-top: -1rem;
`