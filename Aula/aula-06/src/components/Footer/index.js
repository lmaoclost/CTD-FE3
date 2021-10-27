import './style.css';

const Footer = ({empresa}) => {
  const generateDateString = () => {
    const creationYear = '2021';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
  }
  return(
    <footer id="footer">
      <h3>{empresa} Todos os direitos reservados. &copy; Copyright {generateDateString()}</h3>
    </footer>
  )
}

export default Footer;