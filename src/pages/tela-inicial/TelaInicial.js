import React, { Component } from 'react'

export default class TelaInicial extends Component {


    render() {
        return (
            <>
                <div>
                    <buttom onClick={this.props.goToTelaServicos}>Lista de Serviços</buttom>
                </div>

                <div>
                    <buttom onClick={this.props.goToTelaCadastro}>Formulario de Cadastro</buttom>
                </div>
            </>
        )
    }
}
