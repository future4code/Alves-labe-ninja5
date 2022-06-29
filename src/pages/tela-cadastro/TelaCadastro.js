import axios from 'axios'
import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';



const Tudo = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
width: 100vw;
height: 100vh;

`


const ParteCentral = styled.div`
display: flex;
justify-content: center;
`
const Card = styled.section`
display: block;
background-color: #8878c7;
justify-content: center;
justify-items: center;
align-items: center;
width: 375px;
margin-top: 15px;
margin-bottom: 20px;
border-radius: 20px;
`
const FormaDePagamento = styled.select`
display: block;
margin-bottom: 18px;
margin-top: 18px;
`

const Botao = styled.button`
background-color: #dbd6ee;
font-size: 15px;
display: block;
`
const Input = styled.input`
margin-bottom: 18px;
width: 60%;
`
const TituloCard = styled.h2`
color: white;
`
const Form = styled.form`

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
    const url = "https://labeninjas.herokuapp.com/" //  Precisa completar lógica esperando a url e o authorization
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    }
    axios.post(url,body, {
      headers: {
        Authorization: ""
  
      }
  
     })
     .then ((res) => {
      alert("Serviço cadrastado com sucesso!")
      this.setState({title: "", description: "", price: "", paymentMethods: "",dueDate: "", }) // limpa os campos para poder cadrastrar outra pessoa depois
     })
  
  
     .catch ((err) => {
      alert(err.response.data.message)
  
     })
  

    
  }

//Obs: Atualizar data para o formato internacional 
//Obs: A estilização precisa ser ajeitada 
//Obs: A parte lógica está esperando autorização e os imputs e os valores.
//Obs: O h2 tem que ser branco mas quanto estiliza ele fica estranho e junta tudo


  render() {
    return (
      <Tudo>
        <Header 
          goToTelaInicial={this.props.goToTelaInicial}
          goToTelaCarrinho={this.props.goToTelaInicial}   
        />
        <ParteCentral>
            <Card>
            <TituloCard>Cadastrar serviço</TituloCard>
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
            <Form>
              <label for="data-prazo"></label>
              <input type="date" id="data-prazo" name='data-prazo'></input>
            </Form> 
            <FormaDePagamento>
              <option>Cartão de crédito</option>
              <option>Boleto</option>
              <option>Pix</option>
            </FormaDePagamento>
            <Botao>cadastrar</Botao>
           
            </Card>
        </ParteCentral>
        < Footer/>

      </Tudo>
    )
  }
}

export default TelaCadastro

