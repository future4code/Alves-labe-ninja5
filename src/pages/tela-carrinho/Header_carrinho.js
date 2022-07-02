import React, { Component } from 'react';
import {Header, ImagemLogo, ImagemCarrinho} from './styled_header'
import img_logo from './../../assets/img/img_header/header_logo.png';
import img_voltar from './../../assets/img/img_header/voltar.png';

export default class Header_ extends Component {
  render() {
    return(
      <Header>
        <ImagemLogo onClick={this.props.goToTelaInicial} src={img_logo} />
        <ImagemCarrinho onClick={this.props.goToTelaServicos} src={img_voltar} />
      </Header>
    )
  }
}