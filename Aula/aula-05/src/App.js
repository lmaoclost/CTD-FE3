import Greeting from './components/Greeting';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  const funcao = () => {
    console.log('foi');
  }

  return (
    <>
      <h2>Fragment</h2>
      <div className="App">
        <Greeting user={user}/>
        <Paragraph funcao={funcao} usuario={user}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta quia, odit perferendis quasi quae eaque cumque culpa atque aliquam ut possimus fugiat labore explicabo velit accusamus quos voluptate natus!</Paragraph>
      </div>
    </>
  );
}

export default App;
