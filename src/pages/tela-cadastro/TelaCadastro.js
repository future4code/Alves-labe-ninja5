import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'


const ParteDeCima = styled.header`
background-color: #dbd6ee;
margin: 0;
`
const Tudo = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
width: 100vw;
height: 100vh;

`
const PardeDeBaixo = styled.footer`
background-color: #dbd6ee;
`
const ParteCentral = styled.div`
display: flex;
justify-content: center;
`
const Card = styled.section`
background-color: #8878c7;
justify-content: center;
justify-items: center;
align-items: center;
width: 35%;
margin-top: 15px;
margin-bottom: 20px;
border-radius: 20px;
`
const FormaDePagamento = styled.select`
display: block;
margin-bottom: 15px;

`

const Botao = styled.button`
background-color: #dbd6ee;
font-size: 15px;
display: block;
`
const Input = styled.input`
margin-bottom: 15px;
width: 60%;
`

export class TelaCadastro extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: "",
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
    this.setState({ title: event.target.value })
  }
  chamardueDate = (event) => {
    this.setState({ dueDate: event.target.value })
  }

  fazerCadastrp = () => {
    const url = "https://labeninjas.herokuapp.com"
    
  }




  render() {
    return (
      <Tudo>
        <ParteDeCima>
        </ParteDeCima>
        <ParteCentral>
            <Card>
            <h2>Cadastrar serviço</h2>
            <Input
              type="text"
              placeholder={"Titulo"}
            >
            </Input>
            <Input
              type="text"
              placeholder={"Descrição"}
            >
            </Input>
            <Input
              type="number"
              placeholder={"Preço"}
            >
            </Input>
            <form>
              <label for="data-prazo"></label>
              <input type="date" id="data-prazo" name='data-prazo'></input>
            </form>
            <FormaDePagamento>
              <option>Cartão de crédito</option>
              <option>Boleto</option>
              <option>Pix</option>
            </FormaDePagamento>
            <Botao>cadastrar</Botao>
            </Card>
        </ParteCentral>
        <PardeDeBaixo>
          <h2>Fim</h2>
        </PardeDeBaixo>
      </Tudo>
    )
  }
}

export default TelaCadastro