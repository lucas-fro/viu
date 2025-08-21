import { Card } from "@/components/card/page";

export default function Login() {
  return (
    <main className="paginaLoginCadastro">
      <Card>
        <h1 className="titleCard">Login</h1>
        <form className="form">
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