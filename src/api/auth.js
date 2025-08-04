import api from '../services/request';

export async function login(email, password) {
  try {
    const response = await api.post('/login', { email, password });

    // Supondo que o token vem em response.data.token
    const token = response.token;
    localStorage.setItem('token', token);

    return response;
  } catch (error) {
    throw error.response?.data || { message: 'Erro desconhecido ao fazer login.' };
  }
}

export function logout() {
  localStorage.removeItem('token');
}
