import Greeting from './components/Greeting';
import Video from './components/Video';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  const listagemDeAlunos = [
    {
      firstName: 'João',
      lastName: 'Silva'
    }, 
    {
      firstName: 'Fulano',
      lastName: 'Alberto'
    },
    {
      firstName: 'John',
      lastName: 'Doe'
    }];
  
  return (
    <>
      <div className="App">
        <Greeting user={user} />
        <Video url="https://www.youtube.com/embed/l04_GGlr3BI">
          Parabains {user.firstName}.
        </Video>
        {listagemDeAlunos.map((aluno) => {
          return (
            <h3 key={aluno.firstName}>Bem vindo {aluno.firstName} {aluno.lastName}</h3>
          )
        })}
        {listagemDeAlunos.map((aluno) => {
          return (
            <Video url="https://www.youtube.com/embed/l04_GGlr3BI">
              Parabains {aluno.firstName}.
            </Video>
          )
        })}
      </div>
    </>
  );
}

export default App;
