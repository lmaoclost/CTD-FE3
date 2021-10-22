import Header from './components/Header';
import Banner from './components/Banner';
import Valorant from './components/Valorant';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Valorant />
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}

export default App;
