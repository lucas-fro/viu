import axios from "axios";

// Cria uma instância do Axios com a base URL do backend
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // URL do backend no Render
  
});

export default api;

// || "https://viu-zbod.onrender.com/"