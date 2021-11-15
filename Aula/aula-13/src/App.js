import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      temaEscuro: true
    }
  }
  nomeEmpresa = 'Rito Gomes';

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
            <h2>O que é Valorant?</h2>
            <p>
              A Riot Games apresenta VALORANT: um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e habilidades únicas! Saiba mais sobre VALORANT e seu elenco incrível! Um jogo de tiro tático 5x5 com personagens originais.
            </p>
          </Banner>
          <Galeria />
          <Formulario />
        </main>
        <Footer empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} />
      </>
    );
  }
}