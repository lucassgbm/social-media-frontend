import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // 🔑 cookies sempre incluídos
});

// Interceptor para incluir token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const get = (url) => {
  return api.get(url)
    .then((res) => 
      res.data
    )
    .catch(error => 

      console.log(error)
    
    );
}
export const post = (url, data) => {

  return api.post(url, data)
    .then((res) =>  

      res.data
    )
    .catch(error => 

      console.log(error)
    
    );
}

export const update = (url, data) => api.put(url, data).then((res) => res.data);
export const remove = (url) => api.delete(url).then((res) => res.data);

export default api;
