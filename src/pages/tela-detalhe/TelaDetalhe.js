import React, { Component } from 'react'
import {Body, Container, Label, Titulo, Buttons, Formulario, ButtonAdicionar, ButtonBack,
        ConteudoAddCarrinho, ImagemAddCarrinho, TextoAddCarrinho, ConteudoVoltar, 
        ImagemSetaEsquerda, TextoVoltar } from './styled'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import add_carrinho from './../../assets/img/adicionar_ao_carrinho.png';
import seta_esquerda from './../../assets/img/seta_esquerda.png';

export default class Teladetalhes extends Component {
  render() {
    return (
      <Body>

        <Header />

        <Container>
          <Formulario>
            <Titulo>Detalhes do produto:</Titulo>

            <Label>Título:</Label>

            <Label>Prazo:</Label>

            <Label>Preço:</Label>

            <Label>Descrição:</Label>

            <Buttons>
              <ButtonAdicionar>
                  <ConteudoAddCarrinho>
                    <ImagemAddCarrinho src={add_carrinho}/>
                    <TextoAddCarrinho>ADICIONAR AO CARRINHO</TextoAddCarrinho>
                  </ConteudoAddCarrinho>
              </ButtonAdicionar>
              <ButtonBack>
                  <ConteudoVoltar>
                    <ImagemSetaEsquerda src={seta_esquerda}/>
                    <TextoVoltar>VOLTAR</TextoVoltar>
                  </ConteudoVoltar>
              </ButtonBack>
            </Buttons>

          </Formulario>
        </Container>

        <Footer />

      </Body>
    )
  }
}
