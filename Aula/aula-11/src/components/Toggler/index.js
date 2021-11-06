import { Component } from 'react';
import './style.scss';

export default class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      mostraNome: false,
    };
  }
  mostraNomeToggler = () => {
    this.setState({
      mostraNome: !this.state.mostraNome
    });
  }
  render() {
    return (
      <>
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          {/* {this.state.mostraNome ? <h2>Nome do Aluno</h2> : ''} */}
          {this.state.mostraNome && (
            <h2>Nome do Aluno</h2>
          )}
          <button className="btn btn-primary" onClick={this.mostraNomeToggler}>
            {this.state.mostraNome ? 'Esconde' : 'Mostra'} Nome
          </button>
        </div>
      </>
    )
  }
}