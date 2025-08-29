import { cadastroService } from "../services/cadastroService.js"

export async function cadastradoController(req, reply) {
    try {
      const user = await cadastroService.register(req.body)
      return reply.code(201).send(user)
    } catch (err) {
      return reply.code(400).send({ error: err.message })
    }
}

