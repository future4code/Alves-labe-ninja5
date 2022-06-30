import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from "../../constantes/BASE_URL"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import * as C from "./styled"

export class TelaCadastro extends Component {

  state = {
    jobs: [],
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    dueDate: "",
  }

  chamarTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  chamarDescription = (event) => {
    this.setState({ description: event.target.value })
  }
  chamarPrice = (event) => {
    this.setState({ price: event.target.value })
  }

  chamarPaymentMethods = (event) => {
    this.setState ({paymentMethods: [...this.state.paymentMethods, event.target.value]})
  }

  chamardueDate = (event) => {
    this.setState({ dueDate: event.target.value })
  }

  criarCadastro = () => {

    const novoJob = {

      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    }

    axios.post(

      `${BASE_URL}/jobs`, novoJob,
      {
        headers: {
          Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
        }
      }
    )
      .then((res) => {
        this.setState({ jobs: res.data })
        alert("Serviço cadastrado com sucesso")
      
      })
      .catch((erro) => {
        console.log(erro.response.data);
        console.log(this.state.paymentMethods)
      });


    
  }

//Obs: Atualizar data para o formato internacional 
//Obs: A estilização precisa ser ajeitada 
//Obs: A parte lógica está esperando autorização e os imputs e os valores.
//Obs: O h2 tem que ser branco mas quanto estiliza ele fica estranho e junta tudo

  };

  render() {

    console.log(this.state.jobs)

    return (

      <C.Tudo>

        <Header />

        <C.ParteCentral>
          <C.Card>
            <h2>Cadastrar serviço</h2>
            
            <C.Input
              onChange={this.chamarTitle}
              placeholder="Titulo"
             >
            </C.Input>
            
            <C.Input
              onChange={this.chamarDescription}
              placeholder={"Descrição"}
            >
            </C.Input>
            
            <C.Input
              type='number'
              onChange={this.chamarPrice}
              placeholder={"Preço"}
            >
            </C.Input>
            
            <form>
              <label for="data-prazo"></label>
              <input onChange={this.chamardueDate} type="date" id="data-prazo" name='data-prazo'></input>
            </form>

            <form action="">
              <input value="cartao-de-credito" type='checkbox' onChange={this.chamarPaymentMethods}></input>
                <label for="cartao-de-credito">Cartão de crédito</label>


              <input value="boleto" type='checkbox' onChange={this.chamarPaymentMethods}></input>
                <label for="boleto">Boleto</label>
              

              <input value="pix" type='checkbox' onChange={this.chamarPaymentMethods}></input>
                <label for="pix">Pix</label>
            </form>

            <C.Botao type='submit' onClick={this.criarCadastro}>cadastrar</C.Botao>
            
          </C.Card>
        </C.ParteCentral>

        <Footer />

      </C.Tudo>
      
    )
  }
}

export default TelaCadastro

