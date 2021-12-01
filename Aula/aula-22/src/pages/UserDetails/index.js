import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Container, ListGroup } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/api';

import './style.scss';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { userName } = useParams();
  const navigate = useNavigate();

  const getUserData = useCallback(async ({ nomeUsuario }) => {
    if (userName !== nomeUsuario && nomeUsuario !== '') {
      navigate(`/user/${nomeUsuario}`);
      return;
    }
    try {
      const response = await api.get(`users/${nomeUsuario}`);
      setUser(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      })
    }
  }, [navigate, userName]);

  useEffect(() => {
    if (userName) {
      getUserData({ nomeUsuario: userName });
    };
  }, [getUserData, userName])

  return (
    <>
      <Helmet>
        <title>Githubble | {userName}</title>
      </Helmet>
      <section id="user">
        <Container className="my-3 text-center">
          <Col md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
            <h2>Procure um usuário do Github para ver suas informações</h2>
            <Formik initialValues={{ nomeUsuario: '' }} onSubmit={getUserData}>
              <Form>
                <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control" />
                <button type="submit" className="btn btn-primary my-3">Pesquisar</button>
              </Form>
            </Formik>
            {user.login && (
              <ListGroup as="ul">
                <ListGroup.Item as="li"><img src={user.avatar_url} alt={`Foto do ${user.login}`} /></ListGroup.Item>
                <ListGroup.Item as="li">Login: {user.login}</ListGroup.Item>
                <ListGroup.Item as="li">Bio: {user.bio}</ListGroup.Item>
                <ListGroup.Item as="li">Site: {user.blog}</ListGroup.Item>
                <ListGroup.Item as="li"><a href={user.html_url} className="btn btn-secondary">Perfil</a></ListGroup.Item>
              </ListGroup>
            )}
          </Col>
        </Container>
      </section>
    </>
  )
}
export default UserDetails;