import { cadastradoController } from "../controller/cadastroController.js";
import { loginController } from "../controller/loginController.js";
import { handleCriarGrupo, handleListarGrupos, handleObterGrupo } from "../controller/grupoController.js";
import { uploadMidiaController } from "../controller/midiaController.js";

export async function routes(fastify) {
  fastify.post("/cadastro", cadastradoController);
  fastify.post("/login", loginController);

  fastify.post("/grupos", { preValidation: [fastify.authenticate] }, handleCriarGrupo);
  fastify.get("/grupos", { preValidation: [fastify.authenticate] }, handleListarGrupos);

  // nova rota para upload de imagens
  fastify.post("/midias", uploadMidiaController);

  //rota que pega um grupo específico
  fastify.get("/grupos/:codigo", handleObterGrupo);
}
