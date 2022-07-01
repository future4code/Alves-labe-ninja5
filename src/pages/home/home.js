import React from "react";
import TelaInicial from "../tela-inicial/TelaInicial";
import TelaServicos from "../tela-servicos/TelaServicos";
import TelaDetalhe from "../tela-detalhe/TelaDetalhe";
import TelaCarrinho from "../tela-carrinho/TelaCarrinho";
import TelaCadastro from "../tela-cadastro/TelaCadastro"
import axios from "axios";
import { BASE_URL } from "../../constantes/BASE_URL";

export default class Home extends React.Component {

  state = {
    paginaAtual: "tela-inicial",
    listaJobs: [],
    carrinho: []
  }

  atualizaCarrinho = (id, titulo, preco) => {
    const novoProduto = {
      id: id,
      titulo: titulo,
      preco: preco
    }
    const novoCarrinho = [...this.state.carrinho, novoProduto]
    this.setState({carrinho: novoCarrinho})
  }

  removerItem = (id) => {
    const novoCarrinho = this.state.carrinho.filter( job => {
      return job.id !== id
    })

    this.setState({carrinho: novoCarrinho})
  }

  pegaJobs = () =>{
    // const url = 
    axios.get(`${BASE_URL}/jobs`, 
      {
        headers: {
          Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
        }
    })
    .then((res)=>{
      console.log("entrou em res")
      // console.log(res.data.jobs)
      console.log(typeof(res.data.jobs))
      
      this.setState({listaJobs: res.data.jobs})
    })
    .catch((erro)=>{
      console.log("entrou no erro")
      console.log(erro)
    })
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
        return <TelaCadastro
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
        />


      case "tela-servicos":
        return <TelaServicos
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
          goToTelaDetalhe={this.goToTelaDetalhe}
          listaJobs={this.state.listaJobs}

          atualizaCarrinho={this.atualizaCarrinho}
        />

      case "tela-detalhe":
        return <TelaDetalhe
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
        />

      case "tela-carrinho":
        return <TelaCarrinho 
          goToTelaInicial={this.goToTelaInicial}
          goToTelaCarrinho={this.goToTelaCarrinho}
          carrinho={this.state.carrinho}
          removerItem={this.removerItem}
        />

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
    this.pegaJobs()
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