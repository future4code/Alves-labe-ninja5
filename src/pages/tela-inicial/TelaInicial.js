import React, { Component } from 'react'
import * as C from "./styled"

export default class TelaInicial extends Component {


    render() {
        return (
            <C.Body>
                <C.Container>
                    {/* <div>
                        <p>Seja bem vindo ao Labeninjas. O site onde você encontra e oferece
                            todos os tipos de serviços. Para contratar clique em "Contratar Serviço"</p>
                    </div> */}

                    <div>
                        <C.Button onClick={this.props.goToTelaServicos}>Contratar Serviço</C.Button>
                        <C.Button onClick={this.props.goToTelaCadastro}>Cadastrar Serviço</C.Button>
                    </div>

                </C.Container>
            </C.Body>
        )
    }
}
