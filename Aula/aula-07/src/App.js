/* eslint-disable jsx-a11y/anchor-is-valid */
import Greeting from './components/Greeting';
import Video from './components/Video';
import './App.scss';

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
      <header class="sticky-top">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">DH Extra</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarsExample03">
              <ul class="navbar-nav mb-2 mb-sm-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown"
                    aria-expanded="false">Cursos</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown03">
                    <li><a class="dropdown-item" href="#cursos">CTD</a></li>
                    <li><a class="dropdown-item" href="#cursos">FullStack</a></li>
                    <li><a class="dropdown-item" href="#cursos">Outros</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#form">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
