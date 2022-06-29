import React, { Component } from 'react';
import {Footer, ImagemRedeSocial, TextoEsquerda, TextoCentral, SigamNos, Redes, TextoSigam } from './styled_footer'

import instagram from './../../assets/img/img_footer/instagram.png';
import facebook from './../../assets/img/img_footer/facebook.png';
import twitter from './../../assets/img/img_footer/twitter.png';
import youtube from './../../assets/img/img_footer/youtube.png';

export default class Footer_ extends Component {
  render() {
    return(
      <Footer>
      <TextoEsquerda>
        LabeNinjas
      </TextoEsquerda>

      <TextoCentral>
        Pais Leme, 215, Pinheiros. CEP: 05424-150
      </TextoCentral>

      <SigamNos>
        <TextoSigam>Sigam-nos nas redes sociais:</TextoSigam>
        <Redes>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={instagram} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={youtube} /></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={twitter} /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><ImagemRedeSocial src={facebook} /></a>
        </Redes>
      </SigamNos>
    </Footer>
    )
  }
}
