"use client";

import Image from 'next/image';
import './tv.css';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import api from '@/utils/axios';
import { useState, useEffect } from 'react';

interface Imagem {
  id: string;
  url: string;
}

interface Grupo {
  id: string;
  nome: string;
  duracao: number;
  imagens: Imagem[];
}

interface FormData {
  codeTv: string;
}

export default function Tv() {
  const [grupo, setGrupo] = useState<Grupo | null>(null);
  const [imagemAtual, setImagemAtual] = useState(0);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const mutation = useMutation({
    mutationFn: async (codigo: string) => {
      const response = await api.get<Grupo>(`/grupos/${codigo}`, {
        headers: {
          userid: localStorage.getItem("userId") || '',
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data.imagens && data.imagens.length > 0) {
        setGrupo(data);
      } else {
        alert('Este grupo não possui imagens');
      }
    },
    onError: () => {
      alert('Código não encontrado');
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data.codeTv);
  };

  // Loop automático das imagens
  useEffect(() => {
    if (!grupo || !grupo.imagens.length) return;

    const intervalo = setInterval(() => {
      setImagemAtual((prev) => 
        prev + 1 >= grupo.imagens.length ? 0 : prev + 1
      );
    }, grupo.duracao * 1000); // converte segundos para milissegundos

    return () => clearInterval(intervalo);
  }, [grupo, imagemAtual]);

  // Se tem grupo carregado, mostra as imagens
  if (grupo) {
    return (
      <main className="backgroundTv">
        <div className="containerImagemTv">
          <Image
            src={grupo.imagens[imagemAtual].url}
            alt={`Imagem ${imagemAtual + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </main>
    );
  }

  // Senão, mostra o formulário
  return (
    <main className="backgroundTv">
      <div className="containerTv section">
        <Image src="/logo.png" alt="Logo" width={150} height={150} className="Logo"/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputGroupTv">
            <label htmlFor="codeTv" className="labelTv">
              Digite o código da sua mídia:
            </label>
            <input
              type="text"
              id="codeTv"
              className="inputTv"
              {...register('codeTv', { required: 'Código é obrigatório' })}
            />
            {errors.codeTv && (
              <span className="error">{errors.codeTv.message}</span>
            )}
          </div>
          <div>
            <button 
              type="submit" 
              className="button-p buttonTv"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Carregando...' : 'Exibir Mídia'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}