import { useParams } from 'react-router-dom';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAxios from '../../hooks/useAxios';

import './style.scss';

const Repository = () => {
  const { repositoryOwner, repositoryName } = useParams();
  const repoFullName = repositoryOwner + '/' + repositoryName;
  const repository = useAxios(`repos/${repoFullName}`);
  const repositoryLang = useAxios(`repos/${repoFullName}/languages`);
  const repositoryContributors = useAxios(`repos/${repoFullName}/contributors`);

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