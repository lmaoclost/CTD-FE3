import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => { navigate('/') }, 5000);

    const intervalId = setInterval(() => {
      setTimer(count => --count)
    }, 1000);

    return () => clearInterval(intervalId)
  }, [navigate, timer])

  return (
    <>
      <h2>404 nada por aqui</h2>
      <h3>Você será redirecionado em {timer}</h3>
    </>
  )
}
export default NotFound;