import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { GithubContext } from '../../../../contexts/GithubContext';

const UserList = () => {
  const { users } = useContext(GithubContext);
  return users.length ? (
    users.map(user => (
      <NavDropdown.Item key={user.id} as={Link} to={`/user/${user.login}`}>{user.login}</NavDropdown.Item>
    ))
  ) : (
    <NavDropdown.Item>Não há usuário procurado anteriormente</NavDropdown.Item>
  )
}

export default UserList;