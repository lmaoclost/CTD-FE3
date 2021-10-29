import './style.css';

const Header = ({empresa}) => {

  return(
    <header>
      <h1>{empresa}</h1>
      <nav>
        <ul>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a href="#">Valorant</a></li>
          <li><a href="#galeria">Videos</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;