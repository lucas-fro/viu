import { Divisor } from '@/components/sidebar/page';
import "../../midias/midias.css";
import { ArrowDownToLine } from 'lucide-react';
import "./infoMidias.css";
import { CardImage } from '@/components/card_image/page';

export default function midiaGrupo() {
    return (
        <main className="mainPrincipal">
            <div className="topPage">
                <div className="infoCodeGroup">
                    <span>54879</span>
                </div>

                <div className="configInfoGroup">   
                <form className="formConfigInfoGroup">
                    <label htmlFor="">
                        Nome do Grupo:
                        <input type="text" className="inputInfo" />
                    </label>

                    <label htmlFor="">
                        Intervalo:
                        <select name="intervalo" id="intervalo" className="inputInfo">
                            <option value="5">5s</option>
                            <option value="10">10s</option>
                        </select>
                    </label>
                    <button className="button-salvar">salvar</button>
                </form>
                </div>
                
                <label htmlFor="arquivo" className="novaMidia">
                    <ArrowDownToLine />
                    Adicionar arquivo
                    <input type="file"  name="arquivo" id="arquivo" className='hidden'/>
                </label>
            </div>


            <Divisor />
            
            <div className="cardsGroups">
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage /> 
                <CardImage />
                <CardImage /> 
                <CardImage />
                <CardImage /> 
                <CardImage />
                <CardImage /> 
                <CardImage />
                <CardImage /> 
                <CardImage />
                <CardImage />
                <CardImage /> 
            </div>

        </main>
    );
}