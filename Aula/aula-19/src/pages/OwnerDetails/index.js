import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';

const OwnerDetails = () => {
  const [owner, setOwner] = useState({});
  const { repositoryOwner } = useParams();

  useEffect(() => {
    async function loadOwnerData() {
      try {
        const response = await api.get(`users/${repositoryOwner}`);
        setOwner(response.data);
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }
    loadOwnerData();
  }, [repositoryOwner]);

  return (
    <>
      {owner.name && (
        <ul>
          <li>Login: {owner.login}</li>
          <li>Nome: {owner.name}</li>
          <li>Bio: {owner.bio}</li>
          <li><a href={owner.html_url}>Link</a></li>
        </ul>
      )}
    </>
  )
}

export default OwnerDetails;