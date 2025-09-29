import { supabase } from "../config/storage.js";
import { prisma } from "../config/prisma.js";
import { randomUUID } from "crypto";

// A função helper para converter stream para Buffer continua a mesma
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (c) => chunks.push(c));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", (err) => reject(err));
  });
}

export async function uploadMidiaService(req) {
  const parts = req.parts();
  let fileInfo = null; // Vai guardar o buffer, filename, mimetype
  let grupoId = null;

  // 1. Itera sobre as partes e PROCESSA o stream do arquivo IMEDIATAMENTE
  for await (const part of parts) {
    if (part.type === "file") {
      // Consome o stream e o converte para buffer AQUI DENTRO do loop
      const buffer = await streamToBuffer(part.file);
      fileInfo = {
        filename: part.filename,
        mimetype: part.mimetype,
        buffer: buffer, // Armazena o buffer, não mais o stream
      };
    } else {
      // Se for um campo de texto, verifica se é o grupoId
      if (part.fieldname === "grupoId") {
        grupoId = part.value;
      }
    }
  }

  // 2. Validações após processar todas as partes
  if (!fileInfo) {
    throw new Error("Arquivo não enviado.");
  }
  if (!grupoId) {
    throw new Error("O campo 'grupoId' é obrigatório e não foi recebido.");
  }

  console.log("Arquivo recebido:", fileInfo.filename);
  console.log("Grupo ID recebido:", grupoId);

  const { filename, mimetype, buffer } = fileInfo;

  if (!mimetype.startsWith("image/")) {
    throw new Error("Apenas imagens são aceitas");
  }

  const ext = filename.split(".").pop();
  const newName = `${randomUUID()}.${ext}`;
  const filePath = `uploads/${newName}`;

  // 3. Faz o upload para o Supabase usando o buffer que já foi processado
  const { error } = await supabase.storage
    .from("images")
    .upload(filePath, buffer, {
      contentType: mimetype,
    });

  if (error) throw error;

  const { data: publicData } = supabase.storage.from("images").getPublicUrl(filePath);
  const publicUrl = publicData.publicUrl;

  // 4. Salva no banco de dados com o grupoId correto
  const midia = await prisma.imagem.create({
    data: {
      filename: filePath,
      url: publicUrl,
      grupoId: grupoId,
    },
  });

  return { id: midia.id, url: publicUrl };
}
