import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import api from '../services/api';

const useAxios = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadRepositoryData() {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }
    loadRepositoryData();
  }, [url]);

  return data
}

export default useAxios;