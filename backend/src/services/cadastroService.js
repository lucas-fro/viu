import { prisma } from "../config/prisma.js"
import { hashPassword } from "../utils/hash.js"

export const cadastroService = {
  async register({ name, email, password }) {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      throw new Error("Email já cadastrado")
    } 

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    })

    return user
  },
}
