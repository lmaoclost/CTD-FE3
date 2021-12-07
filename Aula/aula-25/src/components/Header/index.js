import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from './components/UserList';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Container>
      <Link to="/" className="navbar-brand">GitHubble</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link to="/lmaoclost/Aulas_CTD" className="nav-link">/lmaoclost/Aulas_CTD</Link>
          <NavDropdown title="Usuários Anteriores" id="basic-nav-dropdown">
            <UserList />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header;