import Greeting from './components/Greeting';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  const funcao = () => {
    console.log('uepaaaaaaaaaaaaa');
  }
  
  return (
    <>
      <div className="App">
        <Greeting user={user} />
        <Paragraph funcao={funcao}>
          Lorem, ipsum dolor {user.firstName} sit amet consectetur adipisicing elit. Voluptatibus ab, repellat, nulla eos doloremque quidem, laborum tempore quis perferendis aliquam impedit minus pariatur quia nobis. Veniam, nisi! Assumenda, exercitationem cumque.
        </Paragraph>
      </div>
    </>
  );
}

export default App;
