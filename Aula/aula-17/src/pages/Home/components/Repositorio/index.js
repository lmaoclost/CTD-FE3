import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Repositorio extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <Link to={`/${this.props.full_name}`}>{this.props.name}</Link>
      </li>
    )
  }
}