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
    buscaNome: "",
    ordenacao: 1
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

  atualizaOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  // getAllJobs = () => {
  //   axios.get(`${BASE_URL}/jobs`, {

  //     headers: {
  //       Authorization: "28d01bab-b426-4bdd-ba33-cf26427fc293"
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }



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
              <SelectOrdenar
                value={this.ordenacao}
                onChange={this.atualizaOrdenacao}
              >
                <OptionOrdenar value={1}>Preço Crescente</OptionOrdenar>
                <OptionOrdenar value={-1}>Preço Decrescente</OptionOrdenar>
                <OptionOrdenar>Título</OptionOrdenar>
                <OptionOrdenar>Prazo</OptionOrdenar>
              </SelectOrdenar>
            </FieldsetInput>

            <FieldsetInput>
              <Legend>Valor Mínimo</Legend>
              <Cifrao>
                <p>R$</p>
                <CampoInput
                  type="number"
                  onChange={this.onPrecoMinimo}
                  value={this.state.precoMinimo}
                />
              </Cifrao>
            </FieldsetInput>

            <FieldsetInput>
              <Legend>Valor Máximo</Legend>
              <Cifrao>
                <p>R$</p>
                <CampoInput
                  type="number"
                  onChange={this.onPrecoMaximo}
                  value={this.state.precoMaximo}
                />
              </Cifrao>
            </FieldsetInput>

          </SectionFiltro>

        </DivFiltros>

        <Lista>

          {this.props.listaJobs.filter((job) => {
            return this.state.precoMinimo === "" || job.price >= this.state.precoMinimo
          }).filter((job) => {
            return this.state.precoMaximo === "" || job.price <= this.state.precoMaximo
          }).filter((job) => {
            return job.title.toLowerCase().includes(this.state.buscaNome.toLowerCase())
          }).sort((currentJob, nextJob) => {
            return this.state.ordenacao * (currentJob.price - nextJob.price)
          }).map(job => {
            return (
              <Card
                goToTelaDetalhe={this.props.goToTelaDetalhe}
                titulo={job.title}
                descricao={job.description}
                preco={job.price}
              />
            )

          })
          }

        </Lista>

        <Footer />

      </Body >
    )
  }
}