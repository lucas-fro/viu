import axios from "axios";

// Cria uma instância do Axios com a base URL do backend
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://viu-zbod.onrender.com/", // URL do backend no Render
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
