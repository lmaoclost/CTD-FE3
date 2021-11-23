import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Repositorio from './components/Repositorio';
import api from '../../services/api';

const Home = () => {
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = async ({ nomeUsuario }) => {
    try {
      const response = await api.get(`/users/${nomeUsuario}/repos`);
      setRepositories(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  return (
    <>
      <div className="col-md-4 col-sm-6 my-3 container text-center">
        <h2>Procure um usuário do Github</h2>
        <Formik initialValues={{ nomeUsuario: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control my-3" />
            <button type="submit" className="btn btn-primary">Pesquisar</button>
          </Form>
        </Formik>
        {repositories.length !== 0 && (
          <ol className="list-group list-group-numbered my-3">
            <Link to={`/owner/${repositories[0].owner.login}`}>Mais detalhes sobre {repositories[0].owner.login} </Link>
            {repositories.map(({ id, name, full_name, owner }) => {
              return (
                <Repositorio id={id} name={name} full_name={full_name} owner={owner} />
              )
            })}
          </ol>
        )}
      </div>
    </>
  );
}
export default Home;