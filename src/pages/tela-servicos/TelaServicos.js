import React, { Component } from 'react'
import { InputsPai } from "./styled"
import BASE_URL from "../../constantes/BASE_URL"
import axios from 'axios'

export default class TelaServicos extends Component {

  state = {
    precoMinimo: "",
    precoMaximo: "",
    buscaNome: ""
  }

  onPrecoMinimo = (event) => {
    console.log("entrou preco precoMinimo")
    this.setState({ precoMinimo: event.target.value })
  }

  onPrecoMaximo = (event) => {
    console.log("entrou preco precoMaximo")
    this.setState({ precoMaximo: event.target.value })
  }

  onBuscaNome = (event) => {
    console.log("entrou preco buscaNome")
    this.setState({ buscaNome: event.target.value })
  }

  getAllJobs = () => {
    axios.get(`${BASE_URL}/jobs`, {

      headers: {
        Authorization: "28d01bab-b426-4bdd-ba33-cf26427fc293"
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

  }
  

  render() {


    return (
      <InputsPai>
        <div>
          Filtro Mínimo:
          <input
            type="number"
            onChange={this.onPrecoMinimo}
            value={this.state.precoMinimo}
            placeholder="Valor Mínimo"
            />
        </div>
        <div>
          Filtro Máximo:
          <input
            type="number"
            onChange={this.onPrecoMaximo}
            value={this.state.precoMaximo} 
            placeholder="Valor Máximo"
            />
        </div>
        <div>
          Busca por Nome:
          <input
            type="search"
            onChange={this.onBuscaNome}
            value={this.state.buscaNome}
            placeholder="Buscar Nome"
            />
        </div>
      </InputsPai>
    )
  }
}