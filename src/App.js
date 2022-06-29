import React from "react";
import Home from "./pages/home/home";
export default class App extends React.Component {

  state = {
    paginaAtual: "tela-inicial"
  }

  procuraPagina = () => {
    switch (this.state.paginaAtual) {
      case "tela-inicial":
        return <TelaInicial 
          goToTelaCadastro={this.goToTelaCadastro} 
          goToTelaServicos={this.goToTelaServicos} 
          goToTelaCarrinho={this.goToTelaCarrinho}
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

    )

  }
}