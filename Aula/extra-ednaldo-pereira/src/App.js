import Header from './components/Header';
import Banner from './components/Banner';
import Ednaldo from './components/Ednaldo';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Ednaldo />
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}

export default App;
