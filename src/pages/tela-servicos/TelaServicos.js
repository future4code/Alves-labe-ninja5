import React, { Component } from 'react'
import BASE_URL from "../../constantes/BASE_URL"
import axios from 'axios'

export default class TelaServicos extends Component {

  state = {

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
      <div>TelaServicos</div>
    )
  }
}
