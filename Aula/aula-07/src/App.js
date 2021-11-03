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
    },
    {
      firstName: 'Ciclano',
      lastName: 'Betrano'
    }
  ]

  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Expand at sm</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample03">
            <ul class="navbar-nav me-auto mb-2 mb-sm-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form>
              <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      <div className="App">
        <Greeting user={user} />
        <Video url="https://www.youtube.com/embed/l04_GGlr3BI">
          Parabains {user.firstName}.
        </Video>
        {
          listagemDeAlunos.map((aluno) => {
            return (
              <Greeting key={aluno.firstName} user={aluno} />
            )
          })
        }
        {listagemDeAlunos.map(({ firstName }, index) => {
          return (
            <Video key={index} url="https://www.youtube.com/embed/l04_GGlr3BI">
              Parabains {firstName}.
            </Video>
          )
        })}
      </div>
    </>
  );
}

export default App;
