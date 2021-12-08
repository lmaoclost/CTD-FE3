import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from './components/UserList';

const Header = ({ bg, variant }) => (
  <Navbar bg={bg} variant={variant} expand="md">
    <Container>
      <Navbar.Brand as={Link} to="/">GitHubble</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to={`/lmaoclost/Aulas_CTD`}>/lmaoclost/Aulas_CTD</Nav.Link>
          <NavDropdown title="Usuários Anteriores" id="basic-nav-dropdown">
            <UserList />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header;