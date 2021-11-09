/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss'

const Header = ({ empresa, temaEscuro }) => {

  return (
    <header class="sticky-top">
      <nav class={`navbar navbar-expand-sm navbar-${temaEscuro ? 'dark' : 'light'} bg-${temaEscuro ? 'dark' : 'light'}`} aria-label="Third navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{empresa}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul class="navbar-nav mb-2 mb-sm-0">
              <li class="nav-item">
                <a href="#" class="nav-link" aria-current="page">Kasino</a>
              </li>
              <li class="nav-item">
                <a href="#outros" class="nav-link">Kasino vs Cassino</a>
              </li>
              <li class="nav-item">
                <a href="#footer" class="nav-link">Footer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;