import './header.css';

function Header({user}) {
  const greeting = () => {
    if(user.firstName){
      return `${user.firstName} ${user.lastName}`;
    }
    return 'desconhecido'
  }
  return (
    <header>
    <h1>DH React</h1>
    <nav>
      <ul>
        <li>Olá, {greeting()}</li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
