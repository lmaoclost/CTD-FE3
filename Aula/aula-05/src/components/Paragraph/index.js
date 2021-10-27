import './style.css';

const Paragraph = ({funcao, children}) => {

  return(
    <>
      <p>{children}</p>
      {funcao()}
    </>
  );
}

export default Paragraph;