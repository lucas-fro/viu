import { prisma } from "../config/prisma.js";
import { comparePassword } from "../utils/hash.js";

export async function loginUser(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: true, status: 400, message: "Email não encontrado" };

  const isValid = await comparePassword(password, user.password);
  if (!isValid) return { error: true, status: 401, message: "Senha incorreta" };

  return { user }; // devolve só o usuário
}
