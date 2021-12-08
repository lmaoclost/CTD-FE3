import { Button as ReactButton } from 'react-bootstrap';

const Button = ({ label, variant = "primary", size = "md", handleClick }) => {
  let scale = 1
  if (size === 'sm') scale = 0.75
  if (size === 'lg') scale = 1.5

  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  }

  return (
    <ReactButton variant={variant} onClick={handleClick} style={style}>
      {label}
    </ReactButton>
  )
}
export default Button;