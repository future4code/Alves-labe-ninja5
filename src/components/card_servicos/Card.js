import React, { Component } from 'react'
import { Card, Titulo, Prazo, LinhaBaixo, Botao, ImagemCarrinho} from "./styled"

import img_carrinho from './../../assets/img/img_header/header_carrinho.png';

const servico = {
  titulo: "Encanador",
  prazo: "01/01/2020",
  preco: 39.99,
  id: 1,
  name: "Camisa 1",
}

export default class TelaServicos extends Component {
  render() {
    return (
      <Card>
      <Titulo>{servico.titulo}</Titulo>
      <Prazo> {`Até ${servico.prazo} por`} <strong>{`R$ ${servico.preco}` }</strong> </Prazo>
      <LinhaBaixo>
        <Botao>VER DETALHES</Botao>
        <ImagemCarrinho src={img_carrinho}/>
      </LinhaBaixo>
      </Card>
    )
  }
}