import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Função para login
export async function auth(email, password) {
  try {
    const response = await api.post("/user/login", {
      email,
      password,
      },
      {
        withCredentials: true
      }
    );

    return response.data;
    
  } catch (error) {
    console.error("Erro no login:", error.response?.data || error.message);
    throw error;
  }
}

// Função para pegar o token
export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

// Função para logout
export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}
