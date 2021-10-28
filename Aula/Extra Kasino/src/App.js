import Header from './components/Header';
import Banner from './components/Banner';
import Outros from './components/Outros';
import Footer from './components/Footer';

import './App.css';

function App() {
  const nomeEmpresa = 'Kasino';

  return (
    <>
      <Header empresa={nomeEmpresa} />
      <main>
        <Banner>
          <h2>O que é Kasino?</h2>
          <p>Kasino é um projeto musical brasileiro de dance music formado em 2003, no Rio de Janeiro. O vocalista do projeto em seu início foi Fher Cassini, sendo mais tarde substituído por Bo Anders.</p>

          <p>Kasino é uma religião criada pelos alunos da turma 1 de 2021 após perderem a sanidade na pandemia do coronga.</p>
        </Banner>
        <Outros />
      </main>
      <Footer empresa={nomeEmpresa} />
    </>
  );
}

export default App;
