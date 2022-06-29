import React, { Component } from 'react'
import { DivPai, BuscaNome, DivFiltros, CampoInput, SelectOrdenar, OptionOrdenar, Legend } from "./styled"
import BASE_URL from "../../constantes/BASE_URL"
import axios from 'axios'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
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
      <div>
        <Header
          goToTelaInicial={this.props.goToTelaInicial}
          goToTelaCarrinho={this.props.goToTelaCarrinho}
        />
        <DivPai>
          <BuscaNome
            type="text"
            onChange={this.onPrecoMinimo}
            value={this.state.precoMinimo}
            placeholder="Buscar"
          />
        </DivPai>
        <DivFiltros>
          <fieldset>
            <legend>Odenar por:</legend>
            <SelectOrdenar>
              <OptionOrdenar>Preço Crescente</OptionOrdenar>
              <OptionOrdenar>Preço Decrescente</OptionOrdenar>
              <OptionOrdenar>Título</OptionOrdenar>
              <OptionOrdenar>Prazo</OptionOrdenar>
            </SelectOrdenar>
          </fieldset>
          <fieldset>
            <legend>Valor Mínimo</legend>
            <CampoInput
              type="number"
              onChange={this.onPrecoMaximo}
              value={this.state.precoMaximo}
              placeholder="Valor Máximo"
            />
          </fieldset>
          <fieldset>
            <legend>Valor Máximo</legend>
            <CampoInput
              type="number"
              onChange={this.onPrecoMinimo}
              value={this.state.precoMinimo}
              placeholder="Valor Mínimo"
            />
          </fieldset>
        </DivFiltros>
      </div >
    )
  }
}