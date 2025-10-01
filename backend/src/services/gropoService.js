import { prisma } from "../config/prisma.js"

export async function criarGrupo(usuarioId, nome) {
  const codigo = Math.floor(10000 + Math.random() * 90000).toString();

  return await prisma.grupo.create({
    data: {
      usuarioId,
      nome,
      codigo,
    },
  });
}

export async function listarGrupos(usuarioId) {
  return await prisma.grupo.findMany({
    where: { usuarioId },
    include: { 
      _count: { 
        select: { imagens: true } 
      },
      imagens: true
    },
  });
}

export async function obterGrupoPorCodigo(usuarioId, codigo) {
  return await prisma.grupo.findFirst({
    where: {
      usuarioId, 
      codigo 
    },
    include: { 
      _count: { 
        select: { imagens: true } 
      },
      imagens: true
    },
  });
}
