import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v1'
});

export default api;