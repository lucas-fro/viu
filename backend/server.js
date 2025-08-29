// server.js
import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./src/router/routers.js";
import jwt from '@fastify/jwt';

// Carrega variáveis de ambiente do .env
dotenv.config();



const app = Fastify({ logger: true });

app.register(jwt, {
  secret: process.env.JWT_SECRET,
});

// Habilita CORS
await app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], 
});

// Registra rotas
await app.register(routes);

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
