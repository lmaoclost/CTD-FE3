import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';

import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      temaEscuro: true
    }
  }

  nomeEmpresa = 'Ednaldo Pereira';

  alternaTema = () => {
    this.setState({
      temaEscuro: !this.state.temaEscuro
    });
  }

  render() {
    return (
      <>
        <Header empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} />
        <img src="https://cdn-icons-png.flaticon.com/512/702/702814.png" alt="Alterna Cor" onClick={this.alternaTema} />
        <main>
          <Banner>
            <h2>O que é Ednaldo Pereira</h2>
            <ul>
              <li>Para o cego, é a luz.</li>
              <li>Para o faminto, é o pão.</li>
              <li>Para o sedento, é a fonte de água viva.</li>
              <li>Para o morto, é a vida.</li>
              <li>Para o viajante, é o caminho.</li>
            </ul>
          </Banner>
          <Galeria />
          <Contato />
        </main>
        <Footer empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} />
      </>
    );
  }
}
