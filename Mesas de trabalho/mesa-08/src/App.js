import { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    const lista = [
      {
        id: 0,
        imageUrl: 'https://media.gazetadopovo.com.br/2021/09/22094218/banana-cachos.png',
        nome: 'Banana'
      },
      {
        id: 1,
        imageUrl: 'https://cdn.panelinha.com.br/receita/1555945789657-Panelinha-29-01-2015-6528.jpg',
        nome: 'Arroz'
      },
      {
        id: 2,
        imageUrl: 'https://img.itdg.com.br/tdg/images/blog/uploads/2017/08/shutterstock_279701309-300x200.jpg',
        nome: 'Leite'
      },
    ]
    this.state = {
      listaDeCompras: lista,
      listaPadrão: lista
    };
  }

  resetaLista = () => {
    this.setState({
      listaDeCompras: this.state.listaPadrão
    })
  }

  removeCompra = (idCompra) => {
    const listaNova = this.state.listaDeCompras.filter(({ id }) => {
      return id !== idCompra
    });
    this.setState({
      listaDeCompras: listaNova
    });
  }
  render() {
    return (
      <>
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
          <button className="btn btn-primary" onClick={this.resetaLista}>Reseta lista</button>
          {
            this.state.listaDeCompras.map(({ id, imageUrl, nome }) => {
              return (
                <div key={id} onClick={() => this.removeCompra(id)}>
                  <ul>
                    <li><img src={imageUrl} alt={nome} /></li>
                    <li>{nome}</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}