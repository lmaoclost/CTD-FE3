import Header from './components/Header';
import Banner from './components/Banner';
import Kasino from './components/Kasino';
import Outros from './components/Outros';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Kasino />
        <Outros />
      </main>
      <Footer />
    </div>
  );
}

export default App;
