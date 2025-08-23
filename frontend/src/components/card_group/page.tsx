import "./cardGroup.css";
import { EllipsisVertical } from "lucide-react";

export function CardGroup() {
    return (
        <div className="cardGroup">
            <button className="configGroup"><EllipsisVertical /></button>
            <h4>Nome do Grupo</h4>
            <p>Fotos: 12</p>
            <span className="codeGroup">36715</span>
        </div>
    );
}