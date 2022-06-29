import React, { Component } from 'react';
import {Header, ImagemLogo, ImagemCarrinho} from './styled_header'
import img_logo from './../../assets/img/img_header/header_logo.png';
import img_carrinho from './../../assets/img/img_header/header_carrinho.png';

export default class Header_ extends Component {

  state = {
    telaCarrinho: this.props.goToTelaCarrinho,
    telaInicio: this.props.goToTelaInicio,
  }

  render() {
    return(
      <Header>
        <ImagemLogo onClick={this.state.telaInicio} src={img_logo} />
        <ImagemCarrinho onClick={this.state.telaCarrinho} src={img_carrinho} />
      </Header>
    )
  }
}
