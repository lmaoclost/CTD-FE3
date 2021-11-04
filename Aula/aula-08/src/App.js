import { Component, Fragment } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      soma: 0,
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
        soma: this.state.soma + 1
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
          <h2>{this.state.soma}</h2>
          <button className="btn btn-primary" onClick={somaUm}>Soma Um</button>
        </div>

        {/* Alternador */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          {this.state.mostraNome && (<h2>
            Nome do cara
          </h2>)}
          <button className="btn btn-primary" onClick={mostraNomeToggler}>Mostra nome</button>
        </div>

        {/* Remove aluno */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
          {
            this.state.listagemDeAlunos.map((aluno) => {
              return (
                <div key={aluno.id} onClick={() => removeAluno(aluno.id)}>
                  <h3>{aluno.firstName}</h3>
                </div>
              )
            })
          }
        </div>
      </>
    );
  }
}

export default App;
