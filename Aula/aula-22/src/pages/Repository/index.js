import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
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
        <title>GitHubble | {repoFullName}</title>
      </Helmet>
      <section id="repositoryDetails" className="my-3 text-center">
        <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
          <Container>
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
          </Container>
        </Col>

        {repositoryContributors.length > 0 && (
          <section id="userRepository">
            <h2>Usuários que contribuiram</h2>
            <Container className="justify-content-center align-items-center">
              <Row>
                {repositoryContributors.map(({ login, id, avatar_url, html_url }) => {
                  return (
                    <Col xl={4} sm={6} key={id}>
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
      </section>
    </>
  )
}

export default Repository;