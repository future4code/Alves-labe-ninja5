import styled from "styled-components";

export const DivPai = styled.div`
display:flex;
justify-content: center;
margin: 20px;
`
export const BuscaNome = styled.input`
background-color: rgb(219,214,238);
height: 30px;
border-radius: 15px;
width: 300px;
`
export const DivFiltros = styled.div`
display:flex;
justify-content: center;
margin: 20px;
`

export const CampoInput = styled.input`
background-color: rgb(219,214,238);
height: 30px;
font-size: 20px;
width: 200px;

`
export const SelectOrdenar = styled.select`
background: rgb(219,214,238);
height: 35px;
width: 200px;
`
export const OptionOrdenar = styled.option`
height: 150;
border: 0;
`

export const Body = styled.div`
  display: grid;
  grid-template-rows: 60px 120px 1fr 60px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Cards = styled.div`
  /* border: solid 3px red; */
`

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 0 20px;
  box-sizing: border-box;
`