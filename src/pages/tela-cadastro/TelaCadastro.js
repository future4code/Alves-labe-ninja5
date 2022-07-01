import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from "../../constantes/BASE_URL"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import * as C from "./styled"
import { eventWrapper } from '@testing-library/user-event/dist/utils'

export class TelaCadastro extends Component {

  state = {
    jobs: [],
    title: "",
    description: "",
    price: "",
    paymentMethods: [],
    dueDate: "",
    checkCd:false,
    checkB:false,
    checkP:false
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
    this.setState({ paymentMethods: [...this.state.paymentMethods, event.target.value] })
    if (event.target.value==="cartao-de-credito") {
      this.setState({checkCd: !this.state.checkCd})
    }else if (event.target.value==="boleto") {
      this.setState({checkB: !this.state.checkB})
    }else if (event.target.value==="pix") {
      this.setState({checkP: !this.state.checkP})
    }
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
        this.setState({ jobs: res.data, title: "" ,description: "", price: "", paymentMethods: [], dueDate: "",checkCd:false, 
        checkB: false, checkP: false})
        alert("Serviço cadastrado com sucesso")
        console.log(this.state.paymentMethods)

      })
      .catch((erro) => {
        console.log(erro.response.data);
        console.log(this.state.paymentMethods)
        alert("Verifique se os campos estão preenchidos ou se a data é maior que a atual")
        
      });
    


  }

 

  render() {

    console.log(this.state.jobs)

    return (

      <C.Tudo>

        <Header
        goToTelaInicial={this.props.goToTelaInicial}
        goToTelaCarrinho={this.props.goToTelaCarrinho}
        />

        <C.ParteCentral>
          <C.Card>
            <C.TituloCadastro>Cadastrar serviço</C.TituloCadastro>

            <C.Input
              onChange={this.chamarTitle}
              placeholder="Titulo"
              value={this.state.title}
            >
            </C.Input>

            <C.Input
              type='number'
              onChange={this.chamarPrice}
              placeholder={"Preço"}
              value={this.state.price}
            >
            </C.Input>

            <C.Textarea
              onChange={this.chamarDescription}
              placeholder={"Descrição"}
              rows="4" 
              value={this.state.description}
            >
            </C.Textarea>
            
            <C.FacaIsso>Validade de serviço:</C.FacaIsso>

            <form>
              <label for="data-prazo"></label>
              <input onChange={this.chamardueDate} type="date"  value={this.state.dueDate} id="data-prazo" name='data-prazo'></input>
            </form>

            <C.FacaIsso>Modo de pagamento:</C.FacaIsso>

            <form action="">
              <input  checked={this.state.checkCd} value="cartao-de-credito" type='checkbox' onChange={this.chamarPaymentMethods}></input>
              <label for="cartao-de-credito">Cartão de crédito</label>


              <input  checked={this.state.checkB} value="boleto" type='checkbox' onChange={this.chamarPaymentMethods}></input>
              <label for="boleto">Boleto</label>


              <input checked={this.state.checkP} value="pix" type='checkbox' onChange={this.chamarPaymentMethods}></input>
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

