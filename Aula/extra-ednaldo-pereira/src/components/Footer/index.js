import './style.scss';

const Footer = ({ empresa, temaEscuro }) => {
  const generateDateString = () => {
    const creation = "2021";
    const current = `${new Date().getFullYear()}`;
    return creation === current ? current : `${creation} - ${current}`;
  }

  return (
    <footer id="footer" className={`d-flex flex-wrap justify-content-center align-items-center py-3 border-top text-${!temaEscuro ? 'dark' : 'light'} bg-${temaEscuro ? 'dark' : 'light'}`}>
      <h3>{empresa} Todos os direitos reservados. &copy;Copyright {generateDateString()}</h3>
    </footer>
  )
}

export default Footer;