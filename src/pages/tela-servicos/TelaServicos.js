import React, { Component } from 'react'
import { Body, DivFiltros, SectionBuscar, BuscaNome, CampoInput, SelectOrdenar, OptionOrdenar, Lista, SectionFiltro, Legend, FieldsetInput, Cifrao } from "./styled"
import { BASE_URL } from "../../constantes/BASE_URL"
import axios from 'axios'
import Header from '../../components/header/Header'
import { Footer } from '../../components/footer/styled_footer'
import Card from './../../components/card_servicos/Card'

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

      <Body>

        <Header
          goToTelaInicial={this.props.goToTelaInicial}
          goToTelaCarrinho={this.props.goToTelaCarrinho}
        />

        <SectionBuscar>
          <BuscaNome
            type="text"
            onChange={this.onBuscaNome}
            value={this.state.buscaNome}
            placeholder="Buscar"
          />
        </SectionBuscar>

        <DivFiltros>
          <SectionFiltro>

            <FieldsetInput>
              <Legend>Ordenar por:</Legend>
              <SelectOrdenar>
                <OptionOrdenar>Preço Crescente</OptionOrdenar>
                <OptionOrdenar>Preço Decrescente</OptionOrdenar>
                <OptionOrdenar>Título</OptionOrdenar>
                <OptionOrdenar>Prazo</OptionOrdenar>
              </SelectOrdenar>
            </FieldsetInput>

            <FieldsetInput>
              <Legend>Valor Mínimo</Legend>
              <CampoInput
                type="number"
                onChange={this.onPrecoMaximo}
                value={this.state.precoMaximo}
              />
            </FieldsetInput>

            <FieldsetInput>
              <Legend>Valor Máximo</Legend>
              <Cifrao>
                <p>R$</p>
                <CampoInput
                  type="number"
                  onChange={this.onPrecoMinimo}
                  value={this.state.precoMinimo}
                />
              </Cifrao>
            </FieldsetInput>

          </SectionFiltro>

        </DivFiltros>

        <Lista>

          {this.props.listaJobs.map((job) => {
            return (
              <Card
                goToTelaDetalhe={this.props.goToTelaDetalhe}
                titulo={job.title}
                descricao={job.description}
                preco={job.price}
              />
            )
          })}

        </Lista>

        <Footer />

      </Body >
    )
  }
}