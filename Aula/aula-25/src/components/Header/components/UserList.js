import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { GithubContext } from '../../../contexts/GithubContext';

const UserList = () => {
  const { users } = useContext(GithubContext);

  return users.length ? (
    users.map(user => (
      <Link key={user.id} to={`/user/${user.login}`} className="dropdown-item">{user.login}</Link>
    ))
  ) : (
    <NavDropdown.Item>Não há usuário procurado anteriormente</NavDropdown.Item>
  )
}

export default UserList;