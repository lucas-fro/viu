import "./cardImage.css";
import Image from "next/image";
import { Trash2 } from 'lucide-react';

export function CardImage() {
    return (
        <div className="cardImage">
            <button className="iconDelete"><Trash2 className="" size={15} /></button>
            
            <Image src="https://files.agro20.com.br/uploads/2020/03/comidabrasileira3-1024x576.jpg" alt="Imagem Exemplo" width={230} height={200} className="image"/>
        </div>
    );
}