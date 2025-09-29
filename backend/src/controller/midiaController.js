import { uploadMidiaService } from "../services/midiaService.js";

export async function uploadMidiaController(req, reply) {
  try {
    const data = await uploadMidiaService(req);
    return reply.send(data);
  } catch (err) {
    req.log.error(err);
    return reply.code(500).send({ error: err.message || "Erro no upload" });
  }
}
