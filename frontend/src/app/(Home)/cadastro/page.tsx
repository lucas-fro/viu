"use client";

import { Card } from "@/components/card/page";
import { Divisor } from "@/components/sidebar/page";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormValues = {
  nome: string;
  email: string;
  password: string;
};

export default function Cadastro() {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      
      console.log("Usuário cadastrado:", data);
      alert("Cadastro realizado com sucesso!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário!");
    }
  };

  return (
    <main className="paginaLoginCadastro">
      <Card>
        <h1 className="titleCard">Cadastre-se</h1>

        {/* handleSubmit do react-hook-form */}
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-group">
            <label htmlFor="nome">Nome completo:</label>
            <input
              className="inputs"
              type="text"
              id="nome"
              {...register("nome", { required: true })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              className="inputs"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input
              className="inputs"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>

          <button type="submit" className="button-p btn-form">
            Cadastrar
          </button>
        </form>

        <Divisor />

        <p className="textLink text-center text-[var(--color-light)]">
          Já tem uma conta?{" "}
          <Link href={"/login"} className="hover:underline">
            Entrar
          </Link>
        </p>
      </Card>
    </main>
  );
}
