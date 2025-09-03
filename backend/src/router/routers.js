import { cadastradoController } from "../controller/cadastroController.js";
import { loginController } from "../controller/loginController.js";
import { handleCriarGrupo, handleListarGrupos } from "../controller/grupoController.js";

export async function routes(fastify) {
  fastify.post("/cadastro", cadastradoController)
  fastify.post("/login", loginController)

  fastify.post("/grupos", { preValidation: [fastify.authenticate] }, handleCriarGrupo);
  fastify.get("/grupos", { preValidation: [fastify.authenticate] }, handleListarGrupos);
}
