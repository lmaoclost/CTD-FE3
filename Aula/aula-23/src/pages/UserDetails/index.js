import { useParams } from 'react-router-dom';
import { Col, Container, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAxios from '../../hooks/useAxios';

import './style.scss';

const UserDetails = () => {
  const { userName } = useParams();
  const user = useAxios(`users/${userName}`);

  return (
    <>
      <Helmet>
        <title>GitHubble | {userName}</title>
      </Helmet>
      <section id="user">
        <Container className="my-3 text-center">
          <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
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