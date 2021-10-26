import './style.css';

const Paragraph = ({usuario, funcao, children}) => {

  return(
    <>
    <p>Olá, {usuario.firstName}, {children}</p>
    {funcao()}
    </>
  )
}

export default Paragraph;