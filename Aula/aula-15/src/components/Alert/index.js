import Swal from 'sweetalert2';

const Alert = ({ title, icon, text, html }) => {
  Swal.fire({
    title: title,
    icon: icon,
    text: text,
    html: html
  });
}

export default Alert;