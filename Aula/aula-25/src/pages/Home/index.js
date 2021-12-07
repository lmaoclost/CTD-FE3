import { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { Container, Col, ListGroup, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { GithubContext } from '../../contexts/GithubContext';
import Repositorio from './components/Repositorio';
import api from '../../services/api';

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const { addUser } = useContext(GithubContext);

  const handleSubmit = async ({ nomeUsuario }) => {
    try {
      const response = await api.get(`/users/${nomeUsuario}/repos`);
      setRepositories(response.data);
      addUser(response.data[0].owner);
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
        <title>GitHubble | {repositories[0] ? repositories[0].owner.login : 'Home'}</title>
      </Helmet>
      <Container className="my-3 text-center">
        <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
          <h2>Procure um usuário do Github para ver seus repositórios</h2>
          <Formik initialValues={{ nomeUsuario: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control" />
              <Button type="submit" variant="primary" className="my-3">Pesquisar</Button>
            </Form>
          </Formik>
        </Col>
      </Container>
      <Col md={{ span: 6, offset: 4 }} sm={{ span: 10, offset: 1 }}>
        {repositories.length !== 0 && (
          <ListGroup as="ol" numbered className="my-3">
            <Link to={`/user/${repositories[0].owner.login}`}>Mais detalhes sobre {repositories[0].owner.login}</Link>
            {repositories.map(({ id, name, full_name }) => {
              return (
                <Repositorio key={id} id={id} name={name} full_name={full_name} />
              )
            })}
          </ListGroup>
        )}
      </Col>
    </>
  );
}
export default Home;