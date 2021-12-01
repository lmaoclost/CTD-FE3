import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Repositorio = ({ id, full_name, name }) => {
  return (
    <ListGroup.Item as="li" key={id}>
      <Link to={`/${full_name}`}>{name}</Link>
    </ListGroup.Item>
  )
}
export default Repositorio;