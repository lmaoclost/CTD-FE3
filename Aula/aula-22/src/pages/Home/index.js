import { useState } from 'react';
import { Container, Col, ListGroup, Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import Repositorio from './components/Repositorio';
import api from '../../services/api';
import './style.scss';

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
      <Helmet>
        <title>Githubble | {repositories[0] ? repositories[0].owner.login : 'Home'}</title>
      </Helmet>
      <Container className="my-3 text-center">
        <Col md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
          <h2>Procure um usuário do Github para ver seus repositórios</h2>
          <Formik initialValues={{ nomeUsuario: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control my-3" />
              <Button variant="primary" type="submit">Pesquisar</Button>
            </Form>
          </Formik>
          {repositories.length !== 0 && (
            <ListGroup as="ol" numbered className="my-3">
              <Link to={`/user/${repositories[0].owner.login}`}>Mais detalhes sobre {repositories[0].owner.login}</Link>
              {repositories.map(({ id, name, full_name }) => {
                return (
                  <Repositorio id={id} name={name} full_name={full_name} />
                )
              })}
            </ListGroup>
          )}
        </Col>
      </Container>
    </>
  );
}
export default Home;