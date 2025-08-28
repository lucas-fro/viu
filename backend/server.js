// server.js
import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { userRoutes } from "./src/router/userRouters.js";

// Carrega variáveis de ambiente do .env
dotenv.config();

const app = Fastify({ logger: true });

// Habilita CORS
await app.register(cors, { origin: "*" });

// Registra rotas
await app.register(userRoutes);

// Função de start do servidor
const start = async () => {
  try {
    const port = process.env.PORT || 3333;
    await app.listen({ port });
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
