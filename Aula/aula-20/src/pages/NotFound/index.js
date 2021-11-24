import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });

  return (
    <>
      <h1>404 nada por aqui</h1>
      <h2>Redirecionando em 5 segundos</h2>
    </>
  )
}
export default NotFound;