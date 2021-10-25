import Greeting from './components/Greeting';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  return (
    <div className="App">
      <Greeting user={user}/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, optio. Facere iste tempora, expedita rerum qui fugit atque doloremque, sunt aut dolores quas numquam quod officiis, eveniet odit minus placeat.</p>
    </div>
  );
}

export default App;
