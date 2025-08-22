import { Download, Smartphone, TvMinimalPlay } from "lucide-react";

export default function Home() {
  return (
    <main className="backgorundPrincipal">
      <section className="chamada-principal section">
        <div className="groupFotoChamada">
          <div className="filtroFoto"></div>
          <div className="fotoChamada"></div>
        </div>
        <div className="textoChamada">
          <span className="subtitulo">Transforme sua TV em uma Mídia Publicitária</span>

          <h1>Faça seus clientes <span className="verem">VEREM</span> suas publicidades</h1>

          <p>Chega de cartas de promoção e cardápios colados na parede! Por apenas R$ 40/mês, transforme qualquer TV Smart em uma poderosa mídia publicitária que realmente chama atenção dos seus clientes.</p>
        <div>
          <a href="" className="linkChamada button-p">Começar agora - R$ 40/mês</a>
        </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Como Funciona</h2>
        <div className="cardsHome">
          <div className="cardHome cardGlass">
            <Download size={50}/>
            <p className="CFTopico">1. Faça Upload</p>
            <p className="CFText">Envie suas imagens, vídeos e conteúdo publicitário através da nossa plataforma intuitiva.</p>
          </div>
          <div className="cardHome cardGlass">
            <Smartphone size={50}/>
            <p className="CFTopico">1. Faça Upload</p>
            <p className="CFText">Envie suas imagens, vídeos e conteúdo publicitário através da nossa plataforma intuitiva.</p>
          </div>
          <div className="cardHome cardGlass">
            <TvMinimalPlay size={50}/>
            <p className="CFTopico">1. Faça Upload</p>
            <p className="CFText">Envie suas imagens, vídeos e conteúdo publicitário através da nossa plataforma intuitiva.</p>
          </div>
        </div>
  
      </section>
    </main>
  );
}
