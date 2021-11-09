import './style.scss';

const Footer = ({ empresa, temaEscuro }) => {
  return (
    <footer id="footer" className={`d-flex flex-wrap justify-content-center align-items-center py-3 border-top text-${temaEscuro ? 'light' : 'dark'} bg-${temaEscuro ? 'dark' : 'light'}`}>
      <h3>{empresa} Todos os direitos reservados. ©Copyright {new Date().getFullYear()}</h3>
    </footer>
  )
}

export default Footer;