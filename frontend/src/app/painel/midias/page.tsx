import { Divisor } from '@/components/sidebar/page';
import { CardGroup } from '@/components/card_group/page';
import "./midias.css";
import { ButtonNovoGrupo } from '@/components/buttonNovoGrupo/page';

export default function Midias() {
    return (
        <main className="mainPrincipal">
            <div className="topPage">
                <h1 className="titlePage">Mídias</h1>
                <ButtonNovoGrupo />
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