import React, { Component } from 'react'
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import * as C from "./styled"

export default class TelaInicial extends Component {



    state = { 
        goToTelaCarrinho: this.props.goToTelaCarrinho

    }


    render() {
        return (
            <>
                <Header goToTelaCarrinho={this.state.goToTelaCarrinho}  />
                <C.Body>

                    <C.Container>

                        <div>
                            <C.Button onClick={this.props.goToTelaServicos}>Contratar Serviço</C.Button>
                            <C.Button onClick={this.props.goToTelaCadastro}>Cadastrar Serviço</C.Button>
                        </div>

                    </C.Container>
               
                </C.Body>
                <Footer />
            </>
        )
    }
}