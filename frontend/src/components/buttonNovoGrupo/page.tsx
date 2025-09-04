"use client";
import React, { useState } from "react";
import { Images } from 'lucide-react';
import { PopUp } from '@/components/popUp/page'
import api from "@/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function ButtonNovoGrupo() {
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState("");
    const queryClient = useQueryClient();

    async function criarGrupoAPI(nome: string) {
      const token = localStorage.getItem('token');
      const response = await api.post(
        '/grupos',
        { nome },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    }

    const mutation = useMutation({
      mutationFn: criarGrupoAPI,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['grupos']});
        setIsOpen(false);
        setNome("");
      }
    });

    return (
        <>
        <button className='button-p flex items-center gap-5' onClick={() => setIsOpen(true)}>
            <Images size={20} />
            Novo Grupo
        </button>

        <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <form onSubmit={(e) => {
                e.preventDefault();
                mutation.mutate(nome);
            }}>
                <div className="input-group">
                    <label htmlFor="">Nome do Grupo:</label>
                    <input
                      type="text"
                      className="inputs"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <button className="button-p w-[300px]" type="submit">
                  Criar novo grupo
                </button>
            </form>
        </PopUp>
        </>
    );
}
