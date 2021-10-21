import './style.css';

const Footer = () => {
  const generateDateString = () => {
    const creation = "2021";
    const current = `${new Date().getFullYear()}`;
    return creation === current ? current : `${creation} - ${current}`;
  }

  return(
    <footer id="footer">
      <h3>Todos os direitos reservados. &copy;Copyright {generateDateString()}</h3>
    </footer>
  )
}

export default Footer;