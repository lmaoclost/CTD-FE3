import './style.css';

const Footer = ({empresa}) => {
  return (
    <footer id="footer">
      <h3>{empresa} Todos os direitos reservados. ©Copyright {new Date().getFullYear()}</h3>
    </footer>
  )
}

export default Footer;