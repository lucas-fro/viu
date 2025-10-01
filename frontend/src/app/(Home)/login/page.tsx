"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/card/page";
import { Divisor } from "@/components/sidebar/page";
import Link from "next/link";
import { useForm } from "react-hook-form";
import api from "@/utils/axios";
import { AxiosError } from "axios";
import Error from "next/error";
import { useEffect } from "react";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/painel/midias");
      }
    }, [router]);

  const onSubmit = async (data: FormValues) => {
    try {
      // Chamada para o backend
      const response = await api.post("/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Login sucesso");

      // Salvar token no localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user.id);

      // Redirecionar para o painel
      router.push("/painel/midias");
      
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
        console.log("Erro do backend:", error.response?.data);
        } else if (error instanceof Error) {
          console.log("Erro na requisição");
        }
}
  };

  return (
    <main className="paginaLoginCadastro">
      <Card>
        <h1 className="titleCard">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
            Entrar
          </button>
        </form>

        <p className="text-center text-[var(--color-light)] cursor-pointer">
          Esqueci a senha
        </p>

        <Divisor />

        <p className="textLink text-center text-[var(--color-light)]">
          Não tem uma conta?{" "}
          <Link href={"/cadastro"} className="hover:underline">
            Cadastre-se
          </Link>
        </p>
      </Card>
    </main>
  );
}
