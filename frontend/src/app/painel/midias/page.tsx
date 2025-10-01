"use client"
import { Divisor } from "@/components/sidebar/page"
import { CardGroup } from "@/components/card_group/page"
import { ButtonNovoGrupo } from "@/components/buttonNovoGrupo/page"
import { useQuery } from "@tanstack/react-query"
import api from "@/utils/axios"
import "./midias.css"

export default function Midias() {
  const { data: grupos, isLoading, isError } = useQuery<Array<{ id: string; nome: string; codigo: string }>>({
    queryKey: ['grupos'],
    queryFn: async () => {
      const { data } = await api.get("/grupos", {
        headers: {
          
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        },
      });
      return data;
    },
  });




  return (
    <main className="mainPrincipal">
      <div className="topPage">
        <h1 className="titlePage">Mídias</h1>
        <ButtonNovoGrupo />
      </div>

      <Divisor />

      <div className="cardsGroups">
        {isLoading && <p>Carregando grupos...</p>}
        {isError && <p>Erro ao carregar os grupos.</p>}
        {grupos?.map((grupo: any) => {
          console.log(grupos);
          console.log(grupo);
          return (
            <CardGroup
              key={grupo.id} 
              id={grupo.id} 
              nome={grupo.nome} 
              codigo={grupo.codigo}
              quantidadeImg={grupo._count?.imagens || 0}
            />
          );
        })}
      </div>
    </main>
  )
}
