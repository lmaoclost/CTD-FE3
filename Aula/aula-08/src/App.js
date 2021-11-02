import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={ soma: 0, mostraNome: false}
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
    return (
      <>
        <div className="app">
          <h1>{this.state.soma}</h1>
          <button onClick={somaUm}>Soma Um</button>
          {this.state.mostraNome && (<span>
            Nome do cara
          </span>)}
          <button onClick={mostraNomeToggler}>Mostra nome</button>
        </div>
      </>
    );
  }
}

export default App;
