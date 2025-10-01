import { criarGrupo, listarGrupos, obterGrupoPorCodigo } from "../services/gropoService.js";

export async function handleCriarGrupo(req, reply) {
  try {
    const { nome } = req.body;

    const usuarioId = req.user.id;

    const grupo = await criarGrupo(usuarioId, nome);

    return reply.code(201).send(grupo);
  } catch (err) {
    console.error(err);
    return reply.code(500).send({ error: "Erro ao criar grupo" });
  }
}

export async function handleListarGrupos(req, reply) {
  try {
    const usuarioId = req.user.id;
    const grupos = await listarGrupos(usuarioId);

    return reply.send(grupos);
  } catch (err) {
    console.error(err);
    return reply.code(500).send({ error: "Erro ao listar grupos" });
  }
}

export async function handleObterGrupo(req, reply) {
  try {
    const { codigo } = req.params;
    const usuarioId = req.headers.userid;
    
    if (!usuarioId) {
      return reply.code(401).send({ error: "usuarioId não fornecido" });
    }
    
    const grupo = await obterGrupoPorCodigo(usuarioId, codigo);
    
    if (!grupo) {
      return reply.code(404).send({ error: "Grupo não encontrado" });
    }
    
    return reply.send(grupo);
  } catch (err) {
    console.error(err);
    return reply.code(500).send({ error: "Erro ao obter grupo" });
  }
}
