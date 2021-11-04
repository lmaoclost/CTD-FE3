import { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      mostraNome: false,
      listagemDeAlunos: [
        {
          id: 0,
          firstName: 'João',
          lastName: 'Silva'
        },
        {
          id: 756,
          firstName: 'Fulano',
          lastName: 'Alberto'
        }
      ]
    }
  }
  render() {

    const somaUm = () => {
      this.setState({
        valor: this.state.valor + 1
      })
    }

    const mostraNomeToggler = () => {
      this.setState({
        mostraNome: !this.state.mostraNome
      })
    }

    const removeAluno = (idAluno) => {
      const listaNova = this.state.listagemDeAlunos.filter(({ id }) => {
        return id !== idAluno;
      });
      this.setState({
        listagemDeAlunos: listaNova
      })
    }

    return (
      <>
        {/* Incremental */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          <h2>{this.state.valor}</h2>
          <button className="btn btn-primary" onClick={somaUm}>Soma Um</button>
        </div>

        {/* Alternador */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          {/* {this.state.mostraNome ? <h2>Patricia Ruffino</h2> : ''} */}
          {this.state.mostraNome && (
            <h2>Patricia Ruffino</h2>
          )}
          <button className="btn btn-primary" onClick={mostraNomeToggler}>Mostra nome</button>
        </div>

        {/* Remove Aluno */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          {
            this.state.listagemDeAlunos.map(({ id, firstName }) => {
              return (
                <div key={id} onClick={() => removeAluno(id)}>
                  <h3>{firstName}</h3>
                </div>
              )
            })
          }
        </div>
      </>
    );
  }
}