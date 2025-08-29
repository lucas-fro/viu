import axios from "axios";

// Cria uma instância do Axios com a base URL
const api = axios.create({
  baseURL: "http://127.0.0.1:3333", // usa .env se existir
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
