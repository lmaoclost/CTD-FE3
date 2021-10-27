import Greeting from './components/Greeting';
import Video from './components/Video';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }
  
  return (
    <>
      <div className="App">
        <Greeting user={user} />
        <Video url="https://www.youtube.com/embed/l04_GGlr3BI">
          Parabains {user.firstName}.
        </Video>
      </div>
    </>
  );
}

export default App;
