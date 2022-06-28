import React from "react";
import TelaInicial from "./pages/tela-inicial/TelaInicial"
import TelaServicos from "./pages/tela-servicos/TelaServicos"
import TelaCadastro from "./pages/tela-cadastro/TelaCadastro"
import TelaDetalhe from "./pages/tela-detalhe/TelaDetalhe"
import TelaCarrinho from "./pages/tela-carrinho/TelaCarrinho"

export default class App extends React.Component {

  state = {

    paginaAtual: "tela-cadastro"

  }

  procuraPagina = () => {
    switch (this.state.paginaAtual) {
      case "tela-inicial":
        return <TelaInicial 
          goToTelaCadastro={this.goToTelaCadastro} 
          goToTelaServicos={this.goToTelaServicos} 
          />

      case "tela-cadastro":
        return <TelaCadastro />

      case "tela-servicos":
        return <TelaServicos />

      case "tela-detalhe":
        return <TelaDetalhe />

      case "tela-carrinho":
        return <TelaCarrinho />

      default:
        return "Erro ao Encontrar pagina"

    }
  }

  goToTelaInicial = () => {
    this.setState({ paginaAtual: "tela-inicial" })
  }

  goToTelaCadastro = () => {
    this.setState({ paginaAtual: "tela-cadastro" })
  }

  goToTelaServicos = () => {
    this.setState({ paginaAtual: "tela-servicos" })
  }

  goToTelaDetalhe = () => {
    this.setState({ paginaAtual: "tela-detalhe" })
  }

  goToTelaCarrinho = () => {
    this.setState({ paginaAtual: "tela-carrinho" })
  }

  render() {

    return (

      <div>
        {this.procuraPagina()}
      </div>
    );

  }

}



