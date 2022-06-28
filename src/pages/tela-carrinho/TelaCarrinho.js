import React from "react";
import { Item } from "./ConjuntoDeItens";
import { ConjuntoDoCarrinho } from './styled'
export class TelaCarrinho extends React.Component {
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
            <ConjuntoDoCarrinho>
                <h2>Carrinho</h2>
                <div>{itens}</div>
                <p>Valor total: R$ {this.props.valorTotal},00</p>
            </ConjuntoDoCarrinho>
        )
    }
}
