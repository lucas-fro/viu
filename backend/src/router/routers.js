import { cadastradoController } from "../controller/cadastroController.js"
import { loginController } from "../controller/loginController.js"

export async function routes(fastify) {
  fastify.post("/cadastro", cadastradoController)
  fastify.post("/login", loginController)
}
