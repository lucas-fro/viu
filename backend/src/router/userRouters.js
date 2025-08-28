import { userController } from "../controller/userController.js"

export async function userRoutes(fastify) {
  fastify.post("/users", userController.registerUser)
}
