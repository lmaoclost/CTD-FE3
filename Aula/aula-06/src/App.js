import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import './App.css';

function App() {
  const nomeEmpresa = 'Rito Gomes';

  return (
   <>
    <Header empresa={nomeEmpresa} />
    <main>
      <Banner>
        <h2>O que é Valorant?</h2>
        <p>
          A Riot Games apresenta VALORANT: um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e habilidades únicas! Saiba mais sobre VALORANT e seu elenco incrível! Um jogo de tiro tático 5x5 com personagens originais.
        </p>
      </Banner>
      <Galeria />
    </main>
    <Footer empresa={nomeEmpresa} />
   </>
  );
}

export default App;
