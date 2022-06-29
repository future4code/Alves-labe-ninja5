
import React from "react";
import { Item } from "./ConjuntoDeItens";
import { ConjuntoDoCarrinho, Carrinho } from './styled'
export default class TelaCarrinho extends React.Component {

    removerItemDoCarrinho = (itemParaRemover) => {
        console.log(itemParaRemover)
    }
    render() {
        const itens =
            this.props.itensdoCarrinho &&
            this.props.itensdoCarrinho.map(item => {
                return <Item
                    nome={item.name}
                    quantidade={item.quantidade}
                    onClick={() => this.props.onClick(item)}
                />
            })
        return (
            <div>
                <Carrinho
                    valorTotal={this.props.valorTotal}
                    itensDoCarrinho={this.props.carrinho}
                    onClick={this.removerItemDoCarrinho}
                />
                <ConjuntoDoCarrinho>
                    <h2>Carrinho</h2>
                    <div>{itens}</div>
                    <p>Valor total: R$ {this.props.valorTotal},00</p>
                </ConjuntoDoCarrinho>
            </div>
        )
    }
}