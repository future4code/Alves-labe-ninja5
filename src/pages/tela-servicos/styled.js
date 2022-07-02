import styled from "styled-components";

export const BuscaNome = styled.input`
  background-color: rgb(219,214,238);
  height: 40px;
  border-radius: 10px;
  width: 300px;
  font-size: 22px;
  margin-right: 35px;
  border:solid 1px rgb(188,188,194);
  @media screen and (max-device-width : 480px){
    margin: 10px;
  }
`

export const DivFiltros = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  margin: 20px;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0;
  }
`

export const CampoInput = styled.input`
  background-color: rgb(219,214,238);
  height: 30px;
  font-size: 22px;
  width: 245px;
  border-radius: 50;
  border: none;
  margin-left: 10px;
  outline:0;
  `

export const SelectOrdenar = styled.select`
  background: rgb(219,214,238);
  height: 35px;
  width: 245px;
  border: none;
  font-size: 18px;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const OptionOrdenar = styled.option`
  height: 150;
  border: 0;
  font-size: 18px;
`

export const Body = styled.div`
    display: grid;
    grid-template-rows: 60px 30px 200px 1fr 60px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Lista = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    margin: 0 20px;
    box-sizing: border-box;
    @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
  `

export const SectionFiltro = styled.section`
  display: flex;
  margin-left: 10px;
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SectionBuscar = styled.section`
  display:flex;
  justify-content: center;
  margin-top: 5px;
`

export const Legend = styled.legend`
  font-size: 16px;
`

export const FieldsetInput = styled.fieldset`
  font-size: 18px;
  margin: 0 20px 0 10px;
  border:solid 1px rgb(188,188,194);
  width: 250px;
  border-radius: 10px;
`

export const Cifrao = styled.div`
  display: flex;
  align-items: center; 
  height:30px;
  font-size: 22px;
`