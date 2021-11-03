/* eslint-disable jsx-a11y/anchor-is-valid */
import Greeting from './components/Greeting';
import Video from './components/Video';
import './App.scss';

function App() {
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
      lastName: 'Beltrano'
    }
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Expand at sm</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      <div className="App">
        {
          listagemDeAlunos.map((aluno, index) => {
            return (
              <>
                <Greeting key={index} user={aluno} />
                <Video url="https://www.youtube.com/embed/l04_GGlr3BI">
                  Parabains {aluno.firstName}.
                </Video>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
