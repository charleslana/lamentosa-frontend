import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/',
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    config.headers = {
      Authorization: token ? `Bearer ${token}` : '',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
