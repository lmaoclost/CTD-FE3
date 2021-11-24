import { Link } from 'react-router-dom';

const Repositorio = ({ id, full_name, name, owner }) => {
  return (
    <>
      <li key={id}>
        <Link to={`/${full_name}`}>{name}</Link>
      </li>
    </>
  )
}
export default Repositorio;