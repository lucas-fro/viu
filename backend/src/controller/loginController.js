import { loginUser } from "../services/loginService.js";

export async function loginController(req, reply) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return reply.code(400).send({ message: "Email e senha são obrigatórios" });
    }

    const result = await loginUser(email, password);

    if (result.error) {
      return reply.code(result.status).send({ message: result.message });
    }

    const token = await reply.jwtSign({
      id: result.user.id,
      email: result.user.email,
    });

    return reply.code(200).send({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
      },
    });
  } catch (err) {
    console.error(err);
    return reply.code(500).send({ message: "Erro interno no servidor" });
  }
}
