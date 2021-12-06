import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { UserContext } from '../../../../contexts/UserContext';

const UserList = () => {
  const { users } = useContext(UserContext);
  return users.length ? (
    users.map(user => {
      return <Link key={user.id} to={`/user/${user.login}`} className="dropdown-item">{user.login}</Link>;
    })
  ) : (
    <NavDropdown.Item>Não há usuário procurado anteriormente.</NavDropdown.Item>
  );
}

export default UserList;