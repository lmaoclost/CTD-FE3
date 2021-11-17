import { Component } from 'react';

export default class Repositorio extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <a target="_blank" href={this.props.html_url} rel="noreferrer">{this.props.name}</a>
      </li>
    )
  }
}