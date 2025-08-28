"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/card/page";
import { Divisor } from "@/components/sidebar/page";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log("📌 Dados do login:", data);

    // 👉 mais tarde você pode trocar o console.log por:
    // const res = await axios.post("http://localhost:4000/api/login", data);
    // if (res.status === 200) router.push("/painel/midias");

    router.push("/painel/midias"); // redireciona após "login"
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
