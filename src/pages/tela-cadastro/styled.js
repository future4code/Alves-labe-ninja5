import styled from "styled-components"



export const Tudo = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
width: 100vw;
height: 100vh;
`

export const ParteCentral = styled.div`
display: flex;
justify-content: center;
`
export const Card = styled.section`
background-color: #8878c7;
display: flex;
flex-direction: column;
align-items: center;
width: 35%;
margin-top: 4%;
margin-bottom: 4%;
border-radius: 20px;
`
export const FormaDePagamento = styled.input`
display: block;
margin-bottom: 15px;

`

export const Botao = styled.button`
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
export const Input = styled.input`
  background-color: #e7e4f3;
  border-radius: 10px;
  width: 65%;
  margin-bottom: 15px;
`
export const TituloCadastro = styled.h2`
color: white;
`
export const Textarea = styled.textarea`
float: left;
width: 65%;
height: auto;
border-radius: 10px;
margin-bottom: 15px;
background-color: #e7e4f3;
border: solid 2px black;
`
export const FacaIsso = styled.p`
margin-top: 0%;
margin-bottom: 1%;
color: white;
`