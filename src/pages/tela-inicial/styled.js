import styled from "styled-components";

export const Body = styled.div `
    display:flex;
    width:100%;
    height:100vh;
    /* background-color: #8878c7; */
`;

export const Container = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    margin:auto;
    width:60%;
    height:60%;
    background-color: #8878c7;
    
`

export const Button = styled.button`

    padding: 10px;
    border: 1px;
    margin:15px;
    font-size: 20px;
    color: #8878c7;
    background-color: #cfc9e8;
    &:hover {
        cursor:pointer;
        transform: scale(1.08);
        transition: all 0.5s;
    }

`
