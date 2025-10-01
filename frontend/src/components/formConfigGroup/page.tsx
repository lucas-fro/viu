"use client";

import { useForm } from "react-hook-form";
import api from "@/utils/axios";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type InfoGroupProps = {
  nome: string;
  duracao: number;
  grupoId: string;
};

type FormData = {
  nome: string;
  duracao: number;
};

export function InfoGroup({ nome, duracao, grupoId }: InfoGroupProps) {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      nome,
      duracao,
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    try {
      await api.put(`/grupos/${grupoId}`, {
        nome: data.nome,
        duracao: Number(data.duracao),
      });
      
      alert("Grupo atualizado com sucesso!");
      
      // Invalida a query para atualizar os dados
      queryClient.invalidateQueries({ queryKey: ["Grupos"] });
    } catch (error) {
      console.error("Erro ao atualizar grupo:", error);
      alert("Erro ao atualizar grupo");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="configInfoGroup">
      <form className="formConfigInfoGroup" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nome">
          Nome do Grupo:
          <input
            type="text"
            id="nome"
            className="inputInfo"
            {...register("nome", { required: "Nome é obrigatório" })}
          />
          {errors.nome && <span className="error">{errors.nome.message}</span>}
        </label>

        <label htmlFor="duracao">
          Intervalo:
          <select
            id="duracao"
            className="inputInfo"
            {...register("duracao", { required: true })}
          >
            <option value="5">5s</option>
            <option value="10">10s</option>
          </select>
        </label>
        
        <button className="button-salvar" type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </div>
  );
}