import { Divisor } from '@/components/sidebar/page';
import "../../midias/midias.css";
import { ArrowDownToLine } from 'lucide-react';
import "./infoMidias.css";
import { CardImage } from '@/components/card_image/page';
import { InfoGroup } from '@/components/formConfigGroup/page';

export default function MidiaGrupo() {
    return (
        <main className="mainPrincipal">
            <div className="topPage">
                <div className="infoCodeGroup">
                    <span>54879</span>
                </div>
                
                <InfoGroup />

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