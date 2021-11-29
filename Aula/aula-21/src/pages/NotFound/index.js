import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 5000);

  return (
    <>
      <h2>404 nada por aqui</h2>
    </>
  )
}
export default NotFound;