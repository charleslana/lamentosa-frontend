import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3333/api/',
});

Api.interceptors.request.use(
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

export default Api;
