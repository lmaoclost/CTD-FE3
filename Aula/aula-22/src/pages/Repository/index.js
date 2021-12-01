import { useEffect, useState } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';

import './style.scss';

const Repository = () => {
  const [repository, setRepository] = useState({});
  const [repositoryLang, setRepositoryLang] = useState({});
  const [repositoryContributors, setRepositoryContributors] = useState({});
  const { repositoryOwner, repositoryName } = useParams();
  const repoFullName = repositoryOwner + '/' + repositoryName;

  useEffect(() => {
    async function loadRepositoryData() {
      try {
        const [repository, languages, contributors] = await Promise.all([
          api.get(`repos/${repoFullName}`),
          api.get(`repos/${repoFullName}/languages`),
          api.get(`repos/${repoFullName}/contributors`)
        ]);
        setRepository(repository.data);
        setRepositoryLang(languages.data);
        setRepositoryContributors(contributors.data);
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }
    loadRepositoryData();
  }, [repoFullName]);

  return (
    <>
      <Helmet>
        <title>Githubble | {repoFullName}</title>
      </Helmet>
      <section id="repositoryDetails">
        <Container className="my-3 text-center">
          <Col md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
            {repository.name && (
              <>
                <h2>Dados do Repositório</h2>
                <ListGroup as="ul">
                  <ListGroup.Item as="li">Nome: {repository.name}</ListGroup.Item>
                  <ListGroup.Item as="li">Dono: {repository.owner.login}</ListGroup.Item>
                  <ListGroup.Item as="li">
                    <a href={repository.html_url}>Link</a>
                  </ListGroup.Item>
                </ListGroup>
              </>
            )}

            {repositoryLang && (
              <>
                <h2>Linguagens Utilizadas</h2>
                <ListGroup as="ul">
                  {Object.keys(repositoryLang).map((key) => {
                    return <ListGroup.Item as="li" key={key}>{key}</ListGroup.Item>
                  })}
                </ListGroup>
              </>
            )}
            {repositoryContributors.length > 0 && (
              <section id="userRepository">
                <h2>Usuários que contribuiram</h2>
                <Container className="justify-content-center align-items-center">
                  <Row>
                    {repositoryContributors.map(({ login, id, avatar_url, html_url }) => {
                      return (
                        <Col key={id} xl={4} lg={6}>
                          <ListGroup as="ul">
                            <ListGroup.Item as="li"><img src={avatar_url} alt={`Foto do ${login}`} /></ListGroup.Item>
                            <ListGroup.Item as="li">{login}</ListGroup.Item>
                            <ListGroup.Item as="li"><a href={html_url} className="btn btn-secondary">Perfil</a></ListGroup.Item>
                          </ListGroup>
                        </Col>
                      )
                    })
                    }
                  </Row>
                </Container>
              </section>
            )}
          </Col>
        </Container>
      </section>
    </>
  )
}

export default Repository;