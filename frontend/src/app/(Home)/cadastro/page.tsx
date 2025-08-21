import { Card } from "@/components/card/page";

export default function Cadastro() {
  return (
    <main className="paginaLoginCadastro">
      <Card>
        <h1 className="titleCard">Cadastre-se</h1>
        <form className="form">
            <div className="input-group">
                <label htmlFor="nome">Nome completo:</label>
                <input className="inputs" type="text" id="nome" name="nome" required />
            </div>

            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input className="inputs" type="email" id="email" name="email" required />
            </div>
            
            
            <div className="input-group">
                <label htmlFor="password">Senha:</label>
                <input className="inputs" type="password" id="password" name="password" required />
            </div>
            
            <button type="submit" className="button-p btn-form">Entrar</button>
        </form>
      </Card>
    </main>
  );
}