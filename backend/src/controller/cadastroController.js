import { cadastroService } from "../services/cadastroService.js";

export async function cadastradoController(req, reply) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return reply.code(400).send({ error: "Campos obrigatórios faltando" });

    const user = await cadastroService.register({ name, email, password });
    return reply.code(201).send({ message: "Usuário cadastrado com sucesso!", user });
  } catch (err) {
    req.log.error(err);
    return reply.code(400).send({ error: err.message });
  }
}
