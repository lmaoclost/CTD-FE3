import { Button as ReactButton } from 'react-bootstrap';

const Button = ({ label, type = "submit", variant = "primary", size = "md", handleClick }) => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`
  }

  return (
    <ReactButton type={type} variant={variant} onClick={handleClick} style={style} className="my-3">
      {label}
    </ReactButton>
  )
}

export default Button;