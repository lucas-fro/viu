// server.js
import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./src/router/routers.js";
import jwt from '@fastify/jwt';
import  multipart  from '@fastify/multipart';

// Carrega variáveis de ambiente do .env
dotenv.config();

const app = Fastify({ logger: true });

app.register(jwt, {secret: process.env.JWT_SECRET,});

// Decorator para autenticação
app.decorate("authenticate", async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

await app.register(multipart, {
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
    files: 1,
  },
});

// Habilita CORS
await app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "userid"], 
});

// Registra rotas
await app.register(routes);


// Função de start do servidor
const start = async () => {
  try {
    const port = process.env.PORT || 3333;
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`🚀 Servidor rodando na porta ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
