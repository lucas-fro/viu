"use client";

import { Divisor } from "@/components/sidebar/page";
import "../../midias/midias.css";
import { ArrowDownToLine } from "lucide-react";
import "./infoMidias.css";
import { CardImage } from "@/components/card_image/page";
import { InfoGroup } from "@/components/formConfigGroup/page";
import { usePathname } from "next/navigation";
import { useState } from "react";
import api from "@/utils/axios";
import { useQueryClient } from "@tanstack/react-query";

// Tipagem para os dados
interface Imagem {
  id: string;
  url: string;
}

interface Grupo {
  id: string;
  nome: string;
  duracao: number;
  codigo: string;
  imagens?: Imagem[];
}

export default function MidiaGrupo() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  // Pega os grupos do cache do React Query com tipagem
  const grupos = queryClient.getQueryData<Grupo[]>(['grupos']) || [];
  
  // Encontra o grupo específico pela URL
  const grupoAtual = grupos.find((grupo) => grupo.id === lastSegment);
  console.log(grupoAtual + 'teste grupoAtual');

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const grupoId: string = lastSegment ?? "";
    if (!grupoId) {
      alert("ID do grupo inválido");
      return;
    }

    const form = new FormData();
    form.append("file", file);
    form.append("grupoId", grupoId);

    setLoading(true);
    try {
      const res = await api.post("/midias", form);
      console.log("Upload feito:", res.data);
      alert("Imagem salva: " + res.data.url);
      // Invalida a query para recarregar os dados
      queryClient.invalidateQueries({ queryKey: ['rupos'] });
    } catch (err) {
      console.error(err);
      alert("Erro no upload");
    } finally {
      setLoading(false);
    }
  }

  if (!grupoAtual) {
    return <div>Grupo não encontrado</div>;
  }

  return (
    <main className="mainPrincipal">
      <div className="topPage">
        <div className="infoCodeGroup">
          <span>{grupoAtual.codigo}</span>
        </div>

        <InfoGroup 
          nome={grupoAtual.nome}
          duracao={grupoAtual.duracao}
          grupoId={grupoAtual.id}
        />

        <label htmlFor="arquivo" className="novaMidia">
          <ArrowDownToLine />
          {loading ? "Enviando..." : "Adicionar arquivo"}
          <input
            type="file"
            name="arquivo"
            id="arquivo"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      <Divisor />

      <div className="cardsGroups">
        {grupoAtual.imagens?.map((imagem) => (
          <CardImage 
            key={imagem.id}
            id={imagem.id}
            url={imagem.url}
          />
        ))}
      </div>
    </main>
  );
}