import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com/api', // Altere para sua URL
});

// Interceptor para incluir token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const get = (url) => api.get(url).then((res) => res.data);
export const post = (url, data) => api.post(url, data).then((res) => res.data);
export const update = (url, data) => api.put(url, data).then((res) => res.data);
export const remove = (url) => api.delete(url).then((res) => res.data);

export default api;
