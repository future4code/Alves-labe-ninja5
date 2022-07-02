import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  @media screen and (max-device-width : 480px){
    width: 100vw;
    height: 100vh; 
    border: 1px solid black;
    box-sizing: content-box;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-device-width : 480px){
    width: 100vw;
    /* height: 100%;  */
    border: 1px solid red;
  }
`

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
  @media screen and (max-device-width : 480px){
    /* justify-content: center; */
    align-items: center;
  }
`

export const Titulo = styled.h2`
  text-align: center;
  margin: 0 0 20px 0;
  color: #8878c7;
  font-size: 38px;
  @media screen and (max-device-width : 480px){
    font-size: 30px;
  }
`

export const MetPag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  /* text-align: center; */
  margin: 10px 10px;
`

export const Aceita = styled.p`
  margin: 10px 10px;
`

export const Metodo = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 10px 10px;
  background-color: #9385cc;
  border-radius: 20px;
  padding: 5px 10px;
  @media screen and (max-device-width : 480px){
    /* width: 10%; */
    /* height: 100%;  */
    border: 1px solid green;
    margin: 1px 1px 1px 1px;
    font-size: 15px;
  }
`

export const Prazo = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`

export const Descricao = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
`

export const NamePlaylist = styled.input`
  font-size: 16px;
  height: 30px;
  margin: 0;
    &:disabled {
    color: black;
    background: #e4e4e4;
    border: none;
    padding: 0 0 0 5px;
  }
`

export const Input = styled.input`
  font-size: 16px;
  height: 30px;
  margin: 0;
  border: none;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0 0 0;
  @media screen and (max-device-width : 480px){
    width: 70vw;
    border: 1px solid red;
  }
`

export const ButtonAdicionar = styled.button`
  font-size: 16px;
  color: white;
  height: 40px;
  width: 100%;
  margin: 0 0 5px 0;
  text-align: center;
  border: solid 1px #8878c7;
  border-radius: 5px;
  background-color: #8878c7;
  &:hover {
		cursor: pointer;
		background-color: #6d5cad;
	}
`

export const ButtonBack = styled.button`
  font-size: 16px;
  color: #8878c7;
  height: 40px;
  width: 100%;
  margin: 5px 0 0 0;
  text-align: center;
  border: solid 1px #8878c7;
  border-radius: 5px;
  &:hover {
		cursor: pointer;
		background-color: #dbd6ee;
	}
`

export const ConteudoAddCarrinho = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImagemAddCarrinho = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px 0 0;
`

export const TextoAddCarrinho = styled.p`
  margin: 0;
`

export const ConteudoVoltar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImagemSetaEsquerda = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
`

export const TextoVoltar = styled.p`
  margin: 0;
`