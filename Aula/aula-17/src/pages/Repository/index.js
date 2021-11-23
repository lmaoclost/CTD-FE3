import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';

const Repository = () => {
  const [repository, setRepository] = useState({});
  const { repositoryOwner, repositoryName } = useParams();
  const repoFullName = repositoryOwner + '/' + repositoryName;

  useEffect(() => {
    async function loadRepositoryData() {
      try {
        const response = await api.get(`repos/${repoFullName}`);
        setRepository(response.data);
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
      {repository.name && (
        <ul>
          <li>Nome: {repository.name}</li>
          <li>Dono: {repository.owner.login}</li>
          <li>
            <a href={repository.html_url}>Link</a></li>
        </ul>
      )}
    </>
  )
}

export default Repository;