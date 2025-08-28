import { userService } from "../services/userService.js"

export const userController = {
  async registerUser(req, reply) {
    try {
      const user = await userService.register(req.body)
      return reply.code(201).send(user)
    } catch (err) {
      return reply.code(400).send({ error: err.message })
    }
  },
}
