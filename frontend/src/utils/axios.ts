import axios from "axios";

// Cria uma instância do Axios com a base URL
const api = axios.create({
  baseURL: process.env.BASE_URL, // usa .env se existir
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
