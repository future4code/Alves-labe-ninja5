import styled from "styled-components";

export const Body = styled.div `
    display:flex;
    width:100%;
    height:90vh;
`;

export const Container = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    margin:auto;
`;

export const ButtonsDiv = styled.div `
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`

    display: flex;
    justify-content: center;
    width: 150px;
    margin: auto 10px;
    padding: 8px;
    border: none;
    font-size: 15px;
    color: #cfc9e8;
    font-weight:bold;
    background-color: #8878c7;
    &:hover {
        cursor:pointer;
        transform: scale(1.08);
        transition: all 0.5s;
    }
`;

export const ContainerTexto = styled.div `
    display:flex;
    flex-direction:column;
    width:30vw;
    margin: 10px 20px;

    @media screen and (max-device-width : 480px){
    width:40vw;
    }
`;

export const Titulo = styled.h1 `
    margin:0;
    line-height: 35px;
    font-weight:bold;
    color: #8878c7;
    @media screen and (max-device-width : 480px){
    font-size: 24px;
}
`;

export const ContainerImagem = styled.img `
    display:inline;
    margin: 10px;

    @media screen and (max-device-width : 480px){
    width:40vw;
}
`;
