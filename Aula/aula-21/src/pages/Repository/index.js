import { useEffect, useState, Fragment } from 'react';
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
        // Falar sobre promise.race
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
      <section id="repositoryDetails" className="col-md-4 col-sm-6 my-3 container text-center">
        {repository.name && (
          <>
            <h2>Dados do Repositório</h2>
            <ul>
              <li>Nome: {repository.name}</li>
              <li>Dono: {repository.owner.login}</li>
              <li>
                <a href={repository.html_url}>Link</a>
              </li>
            </ul>
          </>
        )}

        {repositoryLang && (
          <>
            <h2>Linguagens Utilizadas</h2>
            <ul>
              {Object.keys(repositoryLang).map((key) => {
                return <li key={key}>{key}</li>
              })}
            </ul>
          </>
        )}
        {repositoryContributors.length > 0 && (
          <section id="userRepository">
            <h2>Usuários que contribuiram</h2>
            <div className="d-flex justify-content-center align-items-center text-center">
              <div className="row">
                {repositoryContributors.map(({ login, id, avatar_url, html_url, bio, blog }) => {
                  return (
                    <ul className="col-xl-4 col-lg-6 col-6" key={id}>
                      <li><img src={avatar_url} alt={`Foto do ${login}`} /></li>
                      <li>{login}</li>
                      <li><a href={html_url} className="btn btn-secondary">Perfil</a></li>
                    </ul>
                  )
                })
                }
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  )
}

export default Repository;