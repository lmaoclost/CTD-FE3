import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <li>{this.props.nome} {this.props.estaNaLista ? "está" : "não está"} convidado para a festa</li>
    )
  }
}
