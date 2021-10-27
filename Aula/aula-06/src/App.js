import Header from './components/Header';
import Banner from './components/Banner';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.css';

function App() {
  const nomeEmpresa = 'Vavazinho do Amor';
  return (
    <div>
      <Header empresa={nomeEmpresa} />
      <main>
        <Banner />
        <Galeria />
      </main>
      <Footer empresa={nomeEmpresa} />
    </div>
  );
}

export default App;
