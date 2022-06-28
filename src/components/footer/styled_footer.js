import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/-1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #8878c7;
`

export const ImagemRedeSocial = styled.img`
  width: 25px;
  margin: 0 10px 0 5px;
  :hover{
    box-shadow: 1px 1px 5px white;
    cursor:pointer
  }
`

export const TextoEsquerda = styled.p`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;
  height: 50px;
`

export const TextoCentral = styled.p`
  font-family: 'Courier New', Courier, monospace;
`

export const SigamNos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 3px 0;
`

export const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`

export const TextoSigam = styled.p`
  margin: 0 0 3px 0;
  font-family: 'Courier New', Courier, monospace;
`