import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/api';
import './style.scss';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { userName } = useParams();

  useEffect(() => {
    if (userName) {
      getUserData({ nomeUsuario: userName });
    };
  }, [userName]);

  const getUserData = async ({ nomeUsuario }) => {
    try {
      const response = await api.get(`users/${nomeUsuario}`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.message
      })
    }
  }

  return (
    <>
      <section id="user" className="col-md-4 col-sm-6 my-3 container text-center">
        <h2>Procure um usuário do Github para ver suas informações</h2>
        <Formik initialValues={{ nomeUsuario: '' }} onSubmit={getUserData}>
          <Form>
            <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control" />
            <button className="btn btn-primary my-3" type="submit">Pesquisar usuário</button>
          </Form>
        </Formik>
        {user.login && (
          <ul>
            <li><img src={user.avatar_url} alt={`Foto do ${user.login}`} /></li>
            <li>Login: {user.login}</li>
            <li>Bio: {user.bio}</li>
            <li>Site: {user.blog}</li>
            <li><a href={user.html_url}><button className="btn btn-secondary">Link</button></a></li>
          </ul>
        )}
      </section>
    </>
  )
}

export default UserDetails;