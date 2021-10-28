import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.css';

function App() {
  const nomeEmpresa = 'Ednaldo Pereira';

  return (
    <div>
      <Header empresa={nomeEmpresa} />
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
      </main>
      <Footer empresa={nomeEmpresa} />
    </div>
  );
}

export default App;
