import { Images } from 'lucide-react';
import { Divisor } from '@/components/sidebar/page';
import { CardGroup } from '@/components/card_group/page';
import "./midias.css";

export default function Midias() {
    return (
        <main className="mainPrincipal">
            <div className="topPage">
                <h1 className="titlePage">Mídias</h1>
                <button className='button-p flex items-center gap-5'><Images size={20} />Novo Grupo</button>
            </div>
            <Divisor />
            <div className="cardsGroups">
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
                <CardGroup />
            </div>
        </main>
    );
}