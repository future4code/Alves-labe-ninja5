import React from "react";
import { ConjuntoDeItens } from './styled'
export class Item extends React.Component {
  render() {
    return (
      <ConjuntoDeItens>
        <p>{this.props.quantidade}x</p>
        <p>{this.props.nome}</p>
        <button onClick={this.props.onClick}>Remover</button>
      </ConjuntoDeItens>
    )
  }
}