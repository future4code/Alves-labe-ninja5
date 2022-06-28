import React, { Component } from 'react';
import {Header, ImagemLogo, ImagemCarrinho} from './styled_header'
import img_logo from './../../assets/img/img_header/header_logo.png';
import img_carrinho from './../../assets/img/img_header/header_carrinho.png';

export default class Header_ extends Component {
  render() {
    return(
      <Header>
        <ImagemLogo src={img_logo} />
        <ImagemCarrinho src={img_carrinho} />
      </Header>
    )
  }
}
